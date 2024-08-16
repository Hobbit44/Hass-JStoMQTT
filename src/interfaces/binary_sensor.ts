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

/** 
 * This is the config as defined by 
 * <a href="https://www.home-assistant.io/integrations/binary_sensor.mqtt/#configuration-variables" target="_blank">Home Assistant</a> 
 */
export interface IHABinarySensorConfig extends IHACommonConfig {
  /** 
   * Sets the <a href="https://www.home-assistant.io/integrations/binary_sensor/#device-class" target="_blank">class of the device</a>,
   * changing the device state and icon that is displayed on the frontend. The `device_class` can be `null`.
   */
  deviceClass?: IBinarySensorTypes
  /** 
   * If set, it defines the number of seconds after the sensor’s state expires, if it’s not updated. After expiry, the sensor’s state becomes unavailable. 
   * Default: the sensors state never expires.
   */
  expireAfter?: number
  /**
   * Sends update events (which results in update of state object’s last_changed) even if the sensor’s state hasn’t changed. Useful if you want to have 
   * meaningful value graphs in history or want to create an automation that triggers on every incoming state message (not only when the sensor’s new 
   * state is different to the current one).
   */
  forceUpdate?: boolean
  /**
   * For sensors that only send on state updates (like PIRs), this variable sets a delay in seconds after which the sensor’s state will be updated 
   * back to off.
   */
  offDelay?: number
  /** The string that represents the off state. It will be compared to the message in the state_topic (see value_template for details) */
  payloadOff?: string
  /** The string that represents the on state. It will be compared to the message in the state_topic (see value_template for details) */
  payloadOn?: string
  /** The MQTT topic subscribed to receive sensor’s state. */
  stateTopic: string
  /**
   * Defines a template that returns a string to be compared to payload_on/payload_off or an empty string, in which case the MQTT message will be removed. 
   * Remove this option when payload_on and payload_off are sufficient to match your payloads (i.e no preprocessing of original message is required).
   */
  valueTemplate?: string
}
