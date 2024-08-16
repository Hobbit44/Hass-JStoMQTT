import { MqttClient } from "mqtt"
import { Logger } from "pino";
import { logger } from "../utils/logger"
import _ from "lodash";
import { IBinarySensorConfig } from "./binary_sensor";
import { ISwitchConfig } from "./switch";
import { ClassTypes } from "../interfaces/common";
import { IButtonConfig } from "./button";

export interface IListeners {
  [key: string]: (msg: string) => void
}

export type IBaseConfig = ISwitchConfig | IBinarySensorConfig | IButtonConfig

export class Base {
  constructor(mqttClient: MqttClient, type: ClassTypes, config: IBaseConfig) {
    const { name } = config
    this.logger = logger.child({}, { msgPrefix: `[${name}] ` })
    this.client = mqttClient
    this.name = name
    this.type = type

    if(!config.uniqueId) config.uniqueId = `${name}_jstomqtt`
    this.topic = `jstomqtt/${config.uniqueId}`
    
    this.config = config
    this.discoveryTopic = `homeassistant/${type}/${config.uniqueId}/config`
  }
  protected type: ClassTypes
  protected logger: Logger
  protected client: MqttClient
  public readonly discoveryTopic: string
  protected topic: string
  public readonly name: string
  public readonly config: IBaseConfig

  protected listeners: IListeners = {}

  protected publishConfig (): void {
    const config = Object.keys(this.config).reduce(
      (out: IBaseConfig, key: string) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        out[_.snakeCase(key)] = this.config[key]
        return out
      },
      {},
    )
    this.client.publish(this.discoveryTopic, JSON.stringify(config))
  }

  protected setupListener (): void {
    this.client.on("message", (topic, message) => {
      this.logger.debug(`Recieved message on ${topic}: ${message.toString()}`)
      if(this.listeners[topic]) {
        this.logger.debug(`Found listener for ${topic}`)
        this.listeners[topic](message.toString())
      } else {
        this.logger.debug(`No listener for ${topic}`)
      }
    })
    this.client.subscribe(`${this.topic}/#`, {qos: 1}, (err) => {
      if(err) {
        this.logger.error(`Failed to sub to ${this.topic}`)
        this.logger.error(err)
        throw err
      } else {
        this.logger.debug(`Subscribed to ${this.topic}`)
      }
    })
  }

  protected addListener (topic: string, handler: (msg: string) => void): void {
    this.listeners[topic] = handler
  }
}

