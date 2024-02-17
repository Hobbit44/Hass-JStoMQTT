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
    const testSwitch = new BinarySensor(
      client,
      _.camelCase(expect.getState().currentTestName),
    )
    
    testSwitch.on()
  
    expect(msgHandler).toHaveBeenCalledWith(testSwitch.config.stateTopic, IBinarySensorOptions.ON)
  })

  test("Off", () => {
    const testSwitch = new BinarySensor(
      client,
      _.camelCase(expect.getState().currentTestName),
    )
    
    testSwitch.off()
  
    expect(msgHandler).toHaveBeenCalledWith(testSwitch.config.stateTopic, IBinarySensorOptions.OFF)
  })
})

