import { MqttClient } from "mqtt"
import { Logger } from 'pino';
import { logger } from "./utils/logger"
import _ from "lodash";
import { off } from "process";
import { IBinarySensorConfig } from "./device_classes/binary_sensor";
import { ISwitchConfig } from "./device_classes/switch";
import { ClassTypes } from "./interfaces/common";

interface IListeners {
  [key: string]: (msg: string) => void
}

type IBaseConfig = ISwitchConfig | IBinarySensorConfig

export class Base {
  constructor(mqttClient, type: ClassTypes, config: IBaseConfig) {
    const { name } = config
    this.logger = logger.child({}, { msgPrefix: `[${name}] ` })
    this.client = mqttClient
    this.name = name
    this.type = type

    if(!config.uniqueId) config.uniqueId = `${name}_jstomqtt`
    this.topic = `jstomqtt/${config.uniqueId}`
    if(!config.stateTopic) config.stateTopic = `${this.topic}/state`
    
    this.config = config
    this.discoveryTopic = `homeassistant/${type}/${config.uniqueId}/config`
  }
  protected type: ClassTypes
  protected logger: Logger
  protected client: MqttClient
  protected discoveryTopic: string
  protected topic: string
  protected configTopic: string
  public readonly name: string
  public readonly config: IBaseConfig

  protected listeners: IListeners = {}

  protected async publishConfig (): Promise<void> {
    const config = Object.keys(this.config).reduce(
      (out, key) => {
        out[_.snakeCase(key)] = this.config[key]
        return out
      },
      {}
    )
    await this.client.publish(this.discoveryTopic, JSON.stringify(config))
  }

  protected async setupListener (): Promise<void> {
    this.client.on('message', (topic, message) => {
      this.logger.debug(`Recieved message on ${topic}: ${message.toString()}`)
      if(this.listeners[topic]) {
        this.logger.debug(`Found listener for ${topic}`)
        this.listeners[topic](message.toString())
      } else {
        this.logger.debug(`No listener for ${topic}`)
      }
    })
    await this.client.subscribe(`${this.topic}/#`, {qos: 1}, (err) => {
      if(err) {
        this.logger.error(`Failed to sub to ${this.topic}`)
        this.logger.error(err)
      } else {
        this.logger.debug(`Subscribed to ${this.topic}`)
      }
    })
  }

  protected addListener (topic, handler): void {
    this.listeners[topic] = handler
  }
  
  protected pushState (state: string): void { 
    this.logger.debug(`Pushing state: ${state}`)
    this.client.publish(
      this.config.stateTopic, 
      state,
      { retain: true }
    )
  }
}

