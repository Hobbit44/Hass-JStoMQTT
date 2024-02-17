import { IHACommonConfig } from "./common"

export enum ISwitchOptions {
  ON = "ON",
  OFF = "OFF",
}

export enum ISwitchTypes {
  OUTLET = "outlet",
  SWITCH = "switch",
}

export interface IHASwitchConfig extends IHACommonConfig {
  commandTopic: string
  optimistic?: boolean
  retain?: boolean
  stateOff?: string
  stateOn?: string
}
