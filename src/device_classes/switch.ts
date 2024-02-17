import { MqttClient } from "mqtt"
import { Optional } from 'utility-types';
import { Base } from "../base"
import { IHASwitchConfig, ISwitchOptions } from "..//interfaces/switch"
import { ClassTypes } from "../interfaces/common"

export type ISwitchConfig = Optional<IHASwitchConfig, 'stateTopic'> & Optional<IHASwitchConfig, 'commandTopic'>

interface Ihandlers {
  on: () => void,
  off: () => void,
}

export class Switch extends Base {
  constructor(mqttClient: MqttClient, name: string, config?: ISwitchConfig) {
    super(
      mqttClient, 
      ClassTypes.SWITCH,
      {
        name,
        deviceClass: "switch",
        commandTopic: `jstomqtt/switch/${name}/set`,
        ...config,
      }
    )
    
    this.name = name
    
    this.publishConfig()
    this.addListener(this.config.stateTopic, this.handleState.bind(this))
    this.addListener(this.config.commandTopic, this.setListener.bind(this))
    this.setupListener()
  }
  public readonly name: string
  public config: ISwitchConfig
  private _state: ISwitchOptions
  
  public get state (): ISwitchOptions {
    return this._state
  }

  private handlers: Ihandlers = {
    on: () => {},
    off: () => {},
  }
  private handleState (msg: string): void {
    this.logger.debug(`Updating state to ${msg}`)
    if(msg == ISwitchOptions.ON) {
      this._state = ISwitchOptions.ON
    } else if(msg == ISwitchOptions.OFF) {
      this._state = ISwitchOptions.OFF
    }
  }

  protected setListener (msg: string): void {
    if(msg == ISwitchOptions.ON) {
      try {
        this.handlers.on()
        this.logger.debug("Switch turned on")
        this.pushState(ISwitchOptions.ON.toString())
      } catch (err) {
        this.logger.error("Error turning on switch")
        this.logger.error(err)
        this.pushState(this.state.toString())
      }
    } else if(msg == ISwitchOptions.OFF) {
      try {
        this.handlers.off()
        this.logger.debug("Switch turned off")
        this.pushState(ISwitchOptions.OFF.toString())
      } catch (err) {
        this.logger.error("Error turning off switch")
        this.logger.error(err)
        this.pushState(this.state.toString())
      }
    }
  }

  public on (handler: () => void): void {
    this.handlers.on = handler
  }

  public off (handler: () => void): void {
    this.handlers.off = handler
  }
}
