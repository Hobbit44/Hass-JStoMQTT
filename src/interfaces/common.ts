import { Required } from "utility-types";

interface IHAAvailability {
  payloadAvailable?: string;
  payloadNotAvailable?: string;
  topic: string;
  valueTemplate?: string;
}

interface IHADeviceBase {
  configurationUrl?: string
  connections?: string[][];
  hwVersion?: string;
  identifiers?: string | string[];
  manufacturer?: string;
  model?: string;
  name?: string;
  suggestedArea?: string;
  swVersion?: string;
  viaDevice?: string;
}

type IHADevice = Required<IHADeviceBase, 'connections'> | Required<IHADeviceBase, 'identifiers'>;

export type IHACommonConfig = {
  availablity?: IHAAvailability
  availabilityMode?: string
  availabilityTemplate?: string
  availabilityTopic?: string
  device?: IHADevice
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
  qos?: number
  uniqueId?: string
}

export enum ClassTypes {
  SWITCH = "switch",
  BINARY_SENSOR = "binary_sensor",
  BUTTON = "button",
}

