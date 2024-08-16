import { MqttClient } from "mqtt"
import { Optional } from "utility-types";
import { Base } from "./base"
import { ClassTypes } from "../interfaces/common"
import { IHAButtonConfig } from "src/interfaces/button";

export type IButtonConfig = Optional<IHAButtonConfig, "commandTopic">

export interface IButtonHandlers {
  press: () => void,
}

export class Button extends Base {
  constructor(mqttClient: MqttClient, name: string, config?: IButtonConfig) {
    super(
      mqttClient, 
      ClassTypes.BUTTON,
      {
        name,
        commandTopic: `jstomqtt/${name}_jstomqtt/set`,
        ...config,
      },
    )
    
    this.name = name
    
    this.publishConfig()
    this.addListener(this.config.commandTopic, this.setListener)
    this.setupListener()
  }
  public readonly name: string
  public config: IButtonConfig

  private handlers: IButtonHandlers = {
    press: () => {},
  }

  protected setListener = (msg: string): void => {
    this.logger.debug(`got message "${msg}"`)
    if(msg == this.config.payloadPress || msg == "PRESS") {
      try {
        this.handlers.press()
        this.logger.debug("Button pressed")
      } catch (err) {
        this.logger.error("Error running press handler")
        this.logger.error(err)
      }
    }
  }

  public press (handler: () => void): void {
    this.handlers.press = handler
  }
}
