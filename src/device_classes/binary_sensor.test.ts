import { MqttClient, connectAsync as connect } from "mqtt";
import { BinarySensor } from "./binary_sensor";
import _ from "lodash";
import { IBinarySensorOptions } from "../interfaces/binary_sensor";

let client: MqttClient

const msgHandler = jest.fn()

beforeAll(async () => {
  client = await connect("foo", {})
  client.on("message", msgHandler)
});

afterEach(() => {
  msgHandler.mockClear()
})


describe("Binary Sensor", () => {
  test("On", () => {
    const testSensor = new BinarySensor(
      client,
      _.camelCase(expect.getState().currentTestName),
    )
    
    testSensor.on()
  
    expect(msgHandler).toHaveBeenCalledWith(testSensor.config.stateTopic, IBinarySensorOptions.ON)
  })

  test("Off", () => {
    const testSensor = new BinarySensor(
      client,
      _.camelCase(expect.getState().currentTestName),
    )
    
    testSensor.off()
  
    expect(msgHandler).toHaveBeenCalledWith(testSensor.config.stateTopic, IBinarySensorOptions.OFF)
  })
})

