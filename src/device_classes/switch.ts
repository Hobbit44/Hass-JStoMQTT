import { MqttClient } from "mqtt"
import { Optional } from "utility-types";
import { Base } from "./base"
import { IHASwitchConfig, ISwitchOptions } from "../interfaces/switch"
import { ClassTypes } from "../interfaces/common"

export type ISwitchConfig = Optional<IHASwitchConfig, "stateTopic"|"commandTopic">
export interface ISwitchHandlers {
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
        commandTopic: `jstomqtt/${name}_jstomqtt/set`,
        stateTopic: config?.stateTopic || `jstomqtt/${name}_jstomqtt/state`,
        ...config,
      },
    )
    
    this.name = name
    
    this.publishConfig()
    this.addListener(this.config.stateTopic, this.handleState)
    this.addListener(this.config.commandTopic, this.setListener)
    this.setupListener()
  }
  public readonly name: string
  public config: ISwitchConfig
  private _state: ISwitchOptions = ISwitchOptions.OFF
  
  public get state (): ISwitchOptions {
    return this._state
  }

  private handlers: ISwitchHandlers = {
    on: () => {},
    off: () => {},
  }

  private handleState = (msg: string): void => {
    this.logger.debug(`Updating state to ${msg}`)
    if(msg == ISwitchOptions.ON.toString()) {
      this._state = ISwitchOptions.ON
    } else if(msg == ISwitchOptions.OFF.toString()) {
      this._state = ISwitchOptions.OFF
    }
  }

  private setListener = (msg: string): void => {
    if(msg == ISwitchOptions.ON.toString()) {
      try {
        this.handlers.on()
        this.logger.debug("Switch turned on")
        this.pushState(ISwitchOptions.ON.toString())
      } catch (err) {
        this.logger.error("Error turning on switch")
        this.logger.error(err)
        this.pushState(this.state.toString())
      }
    } else if(msg == ISwitchOptions.OFF.toString()) {
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
  
  private pushState (state: string): void { 
    this.logger.debug(`Pushing state: ${state}`)
    this.client.publish(
      this.config.stateTopic, 
      state,
      { retain: true },
    )
  }

  public on (handler: () => void): void {
    this.handlers.on = handler
  }

  public off (handler: () => void): void {
    this.handlers.off = handler
  }
}
