import { IHACommonConfig } from "./common"

export enum ISwitchOptions {
  ON = "ON",
  OFF = "OFF",
}

export enum ISwitchTypes {
  GENERIC = "None",
  OUTLET = "outlet",
  SWITCH = "switch",
}

export interface IHASwitchConfig extends IHACommonConfig {
  commandTemplate?: string
  commandTopic: string
  deviceClass?: ISwitchTypes
  /** 
   * Flag that defines if switch works in optimistic mode.
   * Default: `true` if no state_topic defined, else `false`.
   */
  optimistic?: boolean
  payloadOff?: string
  payloadOn?: string
  retain?: boolean
  stateOff?: string
  stateOn?: string
  stateTopic: string
  valueTemplate?: string
}
