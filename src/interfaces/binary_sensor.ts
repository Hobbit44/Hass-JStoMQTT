import { IHACommonConfig } from "./common"

export enum IBinarySensorOptions {
  ON = "ON",
  OFF = "OFF",
}

export enum IBinarySensorTypes {
  BATTERY = "battery",
  BATTERY_CHARGING = "battery_charging",
  CARBON_MONOXIDE = "carbon_monoxide",
  COLD = "cold",
  CONNECTIVITY = "connectivity",
  DOOR = "door",
  GARAGE_DOOR = "garage_door",
  GAS = "gas",
  HEAT = "heat",
  LIGHT = "light",
  LOCK = "lock",
  MOISTURE = "moisture",
  MOTION = "motion",
  MOVING = "moving",
  OCCUPANCY = "occupancy",
  OPENING = "opening",
  PLUG = "plug",
  POWER = "power",
  PRESENCE = "presence",
  PROBLEM = "problem",
  RUNNING = "running",
  SAFETY = "safety",
  SMOKE = "smoke",
  SOUND = "sound",
  TAMPER = "tamper",
  UPDATE = "update",
  VIBRATION = "vibration",
  WINDOW = "window",
}

export interface IHABinarySensorConfig extends IHACommonConfig {
  expireAfter?: number
  forceUpdate?: boolean
  offDelay?: number
}
