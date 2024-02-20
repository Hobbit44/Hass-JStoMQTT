import { IHACommonConfig } from "./common"

export enum IButtonTypes {
  GENERIC = "None",
  IDENTIFY = "identify",
  RESTART = "restart",
  UPDATE = "update",
}

export interface IHAButtonConfig extends IHACommonConfig {
  commandTopic: string
  deviceClass?: IButtonTypes
  optimistic?: boolean
  payloadPress?: string
  retain?: boolean
}
