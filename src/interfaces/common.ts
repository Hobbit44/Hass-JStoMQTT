interface IHAAvailability {
  payloadAvailable?: string;
  payloadNotAvailable?: string;
  topic: string;
  valueTemplate?: string;
}

interface IHAConnection {
  type: string;
  identifier: string;
}

interface IHADevice {
  configurationUrl: string
  connections?: IHAConnection[];
  hwVersion?: string;
  identifiers?: string[];
  manufacturer?: string;
  model?: string;
  name?: string;
  suggestedArea?: string;
  swVersion?: string;
  viaDevice?: string;
}

export type IHACommonConfig = {
  availablity?: IHAAvailability
  availabilityMode?: string
  availabilityTemplate?: string
  availabilityTopic?: string
  device?: IHADevice
  deviceClass?: string
  enabledByDefault?: boolean
  encoding?: string
  entityCategory?: string
  icon?: string
  jsonAttributesTemplate?: string
  jsonAttributesTopic?: string
  name?: string
  objectId?: string
  payloadAvailable?: string
  payloadNotAvailable?: string
  payloadOff?: string
  payloadOn?: string
  qos?: number
  stateTopic: string
  uniqueId?: string
  valueTemplate?: string
}

export enum ClassTypes {
  SWITCH = "switch",
  BINARY_SENSOR = "binary_sensor",
}

