import { Required } from "utility-types";

export interface IHAAvailability {
  /** The payload that represents the available state. */
  payloadAvailable?: string;
  /** The payload that represents the unavailable state. */
  payloadNotAvailable?: string;
  /** An MQTT topic subscribed to receive availability (online/offline) updates. */
  topic: string;
  /** 
   * Defines a <a href="https://www.home-assistant.io/docs/configuration/templating/#using-templates-with-the-mqtt-integration" target="_blank">template</a>
   * to extract device’s availability from the `topic`. To determine the devices’s availability result of this template will be compared to `payload_available` 
   * and `payload_not_available`.
   */
  valueTemplate?: string;
}

export interface IHADeviceBase {
  /** A link to the webpage that can manage the configuration of this device. Can be either an http://, https:// or an internal homeassistant:// URL. */
  configurationUrl?: string
  /** 
   * A list of connections of the device to the outside world as a list of tuples [connection_type, connection_identifier]. For example the MAC address 
   * of a network interface: "connections": [["mac", "02:5b:26:a8:dc:12"]].
   */
  connections?: string[][];
  /** The hardware version of the device. */
  hwVersion?: string;
  /** A list of IDs that uniquely identify the device. For example a serial number. */
  identifiers?: string | string[];
  /** The manufacturer of the device. */
  manufacturer?: string;
  /** The model of the device. */
  model?: string;
  /** The name of the device. */
  name?: string;
  /** The serial number of the device. */
  serialNumber?: string;
  /** Suggest an area if the device isn’t in one yet. */
  suggestedArea?: string;
  /** The firmware version of the device. */
  swVersion?: string;
  /**
   * Identifier of a device that routes messages between this device and Home Assistant. Examples of such devices are hubs, or parent devices of a 
   * sub-device. This is used to show device topology in Home Assistant.
   */
  viaDevice?: string;
}

export type IHADevice = Required<IHADeviceBase, "connections"> | Required<IHADeviceBase, "identifiers">;

export type IHACommonConfig = {
  /**
   * A list of MQTT topics subscribed to receive availability (online/offline) updates. Must not be used together with `availability_topic`.
   */
  availablity?: IHAAvailability[]
  /**
   * When `availability` is configured, this controls the conditions needed to set the entity to `available`. Valid entries are `all`, `any`, and `latest`. 
   * If set to `all`, `payload_available` must be received on all configured availability topics before the entity is marked as online. If set to `any`, 
   * `payload_available` must be received on at least one configured availability topic before the entity is marked as online. If set to `latest`, 
   * the last `payload_available` or `payload_not_available` received on any configured availability topic controls the availability.
   */
  availabilityMode?: string
  /**
   * Defines a template to extract device’s availability from the availability_topic. To determine the devices’s availability result of this template 
   * will be compared to payload_available and payload_not_available.
   */
  availabilityTemplate?: string
  /**
   * The MQTT topic subscribed to receive birth and LWT messages from the MQTT device. If availability is not defined, the binary sensor will always 
   * be considered available and its state will be on, off or unknown. If availability is defined, the binary sensor will be considered as unavailable 
   * by default and the sensor’s initial state will be unavailable. Must not be used together with availability.
   */
  availabilityTopic?: string
  /**
   * Information about the device this binary sensor is a part of to tie it into the device registry. Only works when unique_id is set. At least one 
   * of identifiers or connections must be present to identify the device.
   */
  device?: IHADevice
  /** Flag which defines if the entity should be enabled when first added. */
  enabledByDefault?: boolean
  /** The encoding of the payloads received. Set to "" to disable decoding of incoming payload. */
  encoding?: string
  /** The category of the entity. When set, the entity category must be diagnostic for sensors. */
  entityCategory?: string
  /** Icon for the entity. */
  icon?: string
  /** 
   * Defines a template to extract the JSON dictionary from messages received on the json_attributes_topic. Usage example can be found in MQTT 
   * sensor documentation.
   */
  jsonAttributesTemplate?: string
  /** 
   * The MQTT topic subscribed to receive a JSON dictionary payload and then set as sensor attributes. Usage example can be found in MQTT sensor 
   * documentation.
   */
  jsonAttributesTopic?: string
  /** The name of the binary sensor. Can be set to null if only the device name is relevant. */
  name?: string
  /** Used instead of name for automatic generation of entity_id */
  objectId?: string
  /** The string that represents the online state. */
  payloadAvailable?: string
  /** The string that represents the offline state. */
  payloadNotAvailable?: string
  /** The maximum QoS level to be used when receiving and publishing messages. */
  qos?: number
  /** An ID that uniquely identifies this sensor. If two sensors have the same unique ID, Home Assistant will raise an exception. */
  uniqueId?: string
}

export enum ClassTypes {
  SWITCH = "switch",
  BINARY_SENSOR = "binary_sensor",
  BUTTON = "button",
}

