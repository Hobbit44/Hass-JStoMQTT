import { IHACommonConfig } from "./common"

export enum IButtonTypes {
  GENERIC = "None",
  IDENTIFY = "identify",
  RESTART = "restart",
  UPDATE = "update",
}

/** 
 * This is the config as defined by 
 * <a href="https://www.home-assistant.io/integrations/button.mqtt/#configuration-variables" target="_blank">Home Assistant</a> 
 */
export interface IHAButtonConfig extends IHACommonConfig {
  /** The MQTT topic to publish commands to trigger the button. */
  commandTopic: string
  /** The type/class of the button to set the icon in the frontend. The device_class can be null. */
  deviceClass?: IButtonTypes
  /** The payload To send to trigger the button. */
  payloadPress?: string
  /** If the published message should have the retain flag on or not. */
  retain?: boolean
}
