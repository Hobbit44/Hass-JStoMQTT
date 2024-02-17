// Types are created from this page: https://developers.home-assistant.io/docs/core/entity/sensor#available-device-classes
export enum SensorDeviceClass {
  APPARENT_POWER,
  AQI,
  ATMOSPHERIC_PRESSURE,
  BATTERY,
  CO2,
  CO,
  CURRENT,
  DATA_RATE,
  DATA_SIZE,
  DATE,
  DISTANCE,
  DURATION,
  ENERGY,
  ENERGY_STORAGE,
  ENUM,
  FREQUENCY,
  GAS,
  HUMIDITY,
  ILLUMINANCE,
  IRRADIANCE,
  MOISTURE,
  MONETARY,
  NITROGEN_DIOXIDE,
  NITROGEN_MONOXIDE,
  NITROUS_OXIDE,
  OZONE,
  PH,
  PM1,
  PM25,
  PM10,
  POWER,
  POWER_FACTOR,
  PRECIPITATION,
  PRECIPITATION_INTENSITY,
  PRESSURE,
  REACTIVE_POWER,
  SIGNAL_STRENGTH,
  SOUND_PRESSURE,
  SPEED,
  SULPHUR_DIOXIDE,
  TEMPERATURE,
  TIMESTAMP,
  VOLATILE_ORGANIC_COMPOUNDS,
  VOLATILE_ORGANIC_COMPOUNDS_PARTS,
  VOLTAGE,
  VOLUME,
  VOLUME_FLOW_RATE,
  VOLUME_STORAGE,
  WATER,
  WEIGHT,
  WIND_SPEED,
}

enum ApparrentPowerUnit {
  VAr = "VAr",
}

type SensorApparentPower = {
  deviceClass: SensorDeviceClass.APPARENT_POWER,
  unit: ApparrentPowerUnit,
}

type SensorAqi = {
  deviceClass: SensorDeviceClass.AQI,
  unit: any,
}

enum AtmosphericPressureUnit {
  cbar = "cbar",
  bar = "bar",
  hPa = "hPa",
  mmHG = "mmHG",
  inHg = "inHg",
  kPa = "kPa",
  mbar = "mbar",
  Pa = "Pa",
  psi = "psi",
}

type SensorAtmosphericPressure = {
  deviceClass: SensorDeviceClass.ATMOSPHERIC_PRESSURE,
  unit: AtmosphericPressureUnit,
}

enum BatteryUnit {
  percent = "%",
}

type SensorBattery = {
  deviceClass: SensorDeviceClass.BATTERY,
  unit: BatteryUnit,
}

enum Co2Unit {
  ppm = "ppm",
}

type SensorCo2 = {
  deviceClass: SensorDeviceClass.CO2,
  unit: Co2Unit,
}

enum CoUnit {
  ppm = "ppm",
}

type SensorCo = {
  deviceClass: SensorDeviceClass.CO,
  unit: CoUnit,
}

enum CurrentUnit {
  A = "A",
  mA = "mA",
}

type SensorCurrent = {
  deviceClass: SensorDeviceClass.CURRENT,
  unit: CurrentUnit,
}

enum DataRateUnit {
  bit_s = "bit/s",
  kbit_s = "kbit/s",
  Mbit_s = "Mbit/s",
  Gbit_s = "Gbit/s",
  B_s = "B/s",
  kB_s = "kB/s",
  MB_s = "MB/s",
  GB_s = "GB/s",
  KiB_s = "KiB/s",
  MiB_s = "MiB/s",
  GiB_s = "GiB/s",
}

type SensorDataRate = {
  deviceClass: SensorDeviceClass.DATA_RATE,
  unit: DataRateUnit,
}

enum DataSizeUnit {
  bit = "bit",
  kbit = "kbit",
  Mbit = "Mbit",
  Gbit = "Gbit",
  B = "B",
  kB = "kB",
  MB = "MB",
  GB = "GB",
  TB = "TB",
  PB = "PB",
  EB = "EB",
  ZB = "ZB",
  YB = "YB",
  KiB = "KiB",
  MiB = "MiB",
  GiB = "GiB",
  TiB = "TiB",
  PiB = "PiB",
  EiB = "EiB",
  ZiB = "ZiB",
  YiB = "YiB",
}

type SensorDataSize = {
  deviceClass: SensorDeviceClass.DATA_SIZE,
  unit: DataSizeUnit,
}

type SensorDate = {
  deviceClass: SensorDeviceClass.DATE,
  unit: any,
}

enum DistanceUnit {
  km = "km",
  m = "m",
  cm = "cm",
  mm = "mm",
  mi = "mi",
  yd = "yd",
  in = "in",
}

type SensorDistance = {
  deviceClass: SensorDeviceClass.DISTANCE,
  unit: DistanceUnit,
}

enum DurationUnit {
  d = "d",
  h = "h",
  min = "min",
  s = "s",
  ms = "ms",
}

type SensorDuration = {
  deviceClass: SensorDeviceClass.DURATION,
  unit: DurationUnit,
}

enum EnergyUnit {
  Wh = "Wh",
  kWh = "kWh",
  MWh = "MWh",
  MJ = "MJ",
  GJ = "GJ",
}

type SensorEnergy = {
  deviceClass: SensorDeviceClass.ENERGY,
  unit: EnergyUnit,
}

type SensorEnergyStorage = {
  deviceClass: SensorDeviceClass.ENERGY_STORAGE,
  unit: EnergyUnit,
}

type SensorEnum = {
  deviceClass: SensorDeviceClass.ENUM,
  unit: any,
}

enum FrequencyUnit {
  Hz = "Hz",
  kHz = "kHz",
  MHz = "MHz",
  GHz = "GHz",
}

type SensorFrequency = {
  deviceClass: SensorDeviceClass.FREQUENCY,
  unit: FrequencyUnit,
}

enum GasUnit {
  m3 = "m³",
  ft3 = "ft³",
  CCF = "CCF",
}

type SensorGas = {
  deviceClass: SensorDeviceClass.GAS,
  unit: GasUnit,
}

enum HumidityUnit {
  percent = "%",
}

type SensorHumidity = {
  deviceClass: SensorDeviceClass.HUMIDITY,
  unit: HumidityUnit,
}

enum IlluminanceUnit {
  lx = "lx",
}

type SensorIlluminance = {
  deviceClass: SensorDeviceClass.ILLUMINANCE,
  unit: IlluminanceUnit,
}

enum IrradianceUnit {
  W_m2 = "W/m²",
  BTU_h_ft2 = "BTU/(h⋅ft²)",
}

type SensorIrradiance = {
  deviceClass: SensorDeviceClass.IRRADIANCE,
  unit: IrradianceUnit,
}

enum MoistureUnit {
  percent = "%",
}

type SensorMoisture = {
  deviceClass: SensorDeviceClass.MOISTURE,
  unit: MoistureUnit,
}

type SensorMonetary = {
  deviceClass: SensorDeviceClass.MONETARY,
  unit: any,
}

enum NitrogenDioxideUnit {
  microgram_m3 = "µg/m³",
}

type SensorNitrogenDioxide = {
  deviceClass: SensorDeviceClass.NITROGEN_DIOXIDE,
  unit: NitrogenDioxideUnit,
}

enum NitrogenMonoxideUnit {
  microgram_m3 = "µg/m³",
}

type SensorNitrogenMonoxide = {
  deviceClass: SensorDeviceClass.NITROGEN_MONOXIDE,
  unit: NitrogenMonoxideUnit,
}

enum NitrousOxideUnit {
  microgram_m3 = "µg/m³",
}

type SensorNitrousOxide = {
  deviceClass: SensorDeviceClass.NITROUS_OXIDE,
  unit: NitrousOxideUnit,
}

enum OzoneUnit {
  microgram_m3 = "µg/m³",
}

type SensorOzone = {
  deviceClass: SensorDeviceClass.OZONE,
  unit: OzoneUnit,
}

type SensorPh = {
  deviceClass: SensorDeviceClass.PH,
  unit: any,
}

enum Pm1Unit {
  microgram_m3 = "µg/m³",
}

type SensorPm1 = {
  deviceClass: SensorDeviceClass.PM1,
  unit: Pm1Unit,
}

enum Pm25Unit {
  microgram_m3 = "µg/m³",
}

type SensorPm25 = {
  deviceClass: SensorDeviceClass.PM25,
  unit: Pm25Unit,
}

enum Pm10Unit {
  microgram_m3 = "µg/m³",
}

type SensorPm10 = {
  deviceClass: SensorDeviceClass.PM10,
  unit: Pm10Unit,
}

enum PowerUnit {
  W = "W",
  kW = "kW",
}

type SensorPower = {
  deviceClass: SensorDeviceClass.POWER,
  unit: PowerUnit,
}

type SensorPowerFactor = {
  deviceClass: SensorDeviceClass.POWER_FACTOR,
  unit: any,
}

enum PrecipitationUnit {
  cm = "cm",
  in = "in",
  mm = "mm",
}

type SensorPrecipitation = {
  deviceClass: SensorDeviceClass.PRECIPITATION,
  unit: PrecipitationUnit,
}

enum PrecipitationIntensityUnit {
  in_d = "in/d",
  in_h = "in/h",
  mm_d = "mm/d",
  mm_h = "mm/h",
}

type SensorPrecipitationIntensity = {
  deviceClass: SensorDeviceClass.PRECIPITATION_INTENSITY,
  unit: PrecipitationIntensityUnit,
}

enum PressureUnit {
  cbar = "cbar",
  bar = "bar",
  hPa = "hPa",
  mmHg = "mmHg",
  inHg = "inHg",
  kPa = "kPa",
  mbar = "mbar",
  Pa = "Pa",
  psi = "psi",
}

type SensorPressure = {
  deviceClass: SensorDeviceClass.PRESSURE,
  unit: PressureUnit,
}

enum ReactivePowerUnit {
  var = "var",
}

type SensorReactivePower = {
  deviceClass: SensorDeviceClass.REACTIVE_POWER,
  unit: ReactivePowerUnit,
}

enum SignalStrengthUnit {
  dB = "dB",
  dBm = "dBm",
}

type SensorSignalStrength = {
  deviceClass: SensorDeviceClass.SIGNAL_STRENGTH,
  unit: SignalStrengthUnit,
}

enum SoundPressureUnit {
  dB = "dB",
  dBA = "dBA",
}

type SensorSoundPressure = {
  deviceClass: SensorDeviceClass.SOUND_PRESSURE,
  unit: SoundPressureUnit,
}

enum SpeedUnit {
  ft_s = "ft/s",
  in_d = "in/d",
  in_h = "in/h",
  km_h = "km/h",
  kn = "kn",
  m_s = "m/s",
  mph = "mph",
  mm_d = "mm/d",
}

type SensorSpeed = {
  deviceClass: SensorDeviceClass.SPEED,
  unit: SpeedUnit,
}

enum SulphurDioxideUnit {
  microgram_m3 = "µg/m³",
}

type SensorSulphurDioxide = {
  deviceClass: SensorDeviceClass.SULPHUR_DIOXIDE,
  unit: SulphurDioxideUnit,
}

enum TemperatureUnit {
  celsius = "°C",
  fahrenheit = "°F",
  kelvin = "K",
}

type SensorTemperature = {
  deviceClass: SensorDeviceClass.TEMPERATURE,
  unit: TemperatureUnit,
}

type SensorTimestamp = {
  deviceClass: SensorDeviceClass.TIMESTAMP,
  unit: any,
}

enum VolatileOrganicCompoundsUnit {
  microgram_m3 = "µg/m³",
}

type SensorVolatileOrganicCompounds = {
  deviceClass: SensorDeviceClass.VOLATILE_ORGANIC_COMPOUNDS,
  unit: VolatileOrganicCompoundsUnit,
}

enum VolatileOrganicCompoundsPartsUnit {
  ppm = "ppm",
  ppb = "ppb",
}

type SensorVolatileOrganicCompoundsParts = {
  deviceClass: SensorDeviceClass.VOLATILE_ORGANIC_COMPOUNDS_PARTS,
  unit: VolatileOrganicCompoundsPartsUnit,
}

enum VoltageUnit {
  V = "V",
  mV = "mV",
}

type SensorVoltage = {
  deviceClass: SensorDeviceClass.VOLTAGE,
  unit: VoltageUnit,
}

enum VolumeUnit {
  L = "L",
  mL = "mL",
  gal = "gal",
  fl_oz = "fl. oz.",
  m3 = "m³",
  ft3 = "ft³",
  CCF = "CCF",
}

type SensorVolume = {
  deviceClass: SensorDeviceClass.VOLUME,
  unit: VolumeUnit,
}

enum VolumeFlowRateUnit {
  m3_h = "m³/h",
  ft3_min = "ft³/min",
  L_min = "L/min",
  gal_min = "gal/min",
}

type SensorVolumeFlowRate = {
  deviceClass: SensorDeviceClass.VOLUME_FLOW_RATE,
  unit: VolumeFlowRateUnit,
}

type SensorVolumeStorage = {
  deviceClass: SensorDeviceClass.VOLUME_STORAGE,
  unit: VolumeUnit,
}

enum WaterUnit {
  L = "L",
  gal = "gal",
  m3 = "m³",
  ft3 = "ft³",
  CCF = "CCF",
}

type SensorWater = {
  deviceClass: SensorDeviceClass.WATER,
  unit: WaterUnit,
}

enum WeightUnit {
  kg = "kg",
  g = "g",
  mg = "mg",
  microgram = "µg",
  oz = "oz",
  lb = "lb",
  st = "st",
}

type SensorWeight = {
  deviceClass: SensorDeviceClass.WEIGHT,
  unit: WeightUnit,
}

type SensorWindSpeed = {
  deviceClass: SensorDeviceClass.WIND_SPEED,
  unit: any,
}

export type SensorType = 
  SensorApparentPower | 
  SensorAqi |
  SensorAtmosphericPressure |
  SensorBattery |
  SensorCo2 |
  SensorCo |
  SensorCurrent |
  SensorDataRate |
  SensorDataSize |
  SensorDate |
  SensorDistance |
  SensorDuration |
  SensorEnergy |
  SensorEnergyStorage |
  SensorEnum |
  SensorFrequency |
  SensorGas |
  SensorHumidity |
  SensorIlluminance |
  SensorIrradiance |
  SensorMoisture |
  SensorMonetary |
  SensorNitrogenDioxide |
  SensorNitrogenMonoxide |
  SensorNitrousOxide |
  SensorOzone |
  SensorPh |
  SensorPm1 |
  SensorPm25 |
  SensorPm10 |
  SensorPower |
  SensorPowerFactor |
  SensorPrecipitation |
  SensorPrecipitationIntensity |
  SensorPressure |
  SensorReactivePower |
  SensorSignalStrength |
  SensorSoundPressure |
  SensorSpeed |
  SensorSulphurDioxide |
  SensorTemperature |
  SensorTimestamp |
  SensorVolatileOrganicCompounds |
  SensorVolatileOrganicCompoundsParts |
  SensorVoltage |
  SensorVolume |
  SensorVolumeFlowRate |
  SensorVolumeStorage |
  SensorWater |
  SensorWeight |
  SensorWindSpeed

