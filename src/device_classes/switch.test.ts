import { MqttClient, connectAsync as connect } from "mqtt";
import { Switch } from "./switch";
import _ from "lodash";
import { ISwitchOptions } from "../interfaces/switch";

let client: MqttClient

const msgHandler = jest.fn()

beforeAll(async () => {
  client = await connect("foo", {})
  client.on("message", msgHandler)
});

afterEach(() => {
  msgHandler.mockClear()
})

describe("Switch", () => {
  test("On", () => {
    const testSwitch = new Switch(
      client,
      _.camelCase(expect.getState().currentTestName),
    )
    
    const on: () => void = jest.fn()
    const off: () => void = jest.fn()
    testSwitch.on(on)
    testSwitch.off(off)
    
    client.publish(testSwitch.config.commandTopic, ISwitchOptions.ON)
    expect(on).toHaveBeenCalledTimes(1)
    expect(off).toHaveBeenCalledTimes(0)
  })

  test("Off", () => {
    const testSwitch = new Switch(
      client,
      _.camelCase(expect.getState().currentTestName),
    )
    
    const on = jest.fn()
    const off = jest.fn()
    testSwitch.on(on)
    testSwitch.off(off)
    
    client.publish(testSwitch.config.commandTopic, ISwitchOptions.OFF)
    expect(on).toHaveBeenCalledTimes(0)
    expect(off).toHaveBeenCalledTimes(1)
  })

  test("random input", () => {
    const testSwitch = new Switch(
      client,
      _.camelCase(expect.getState().currentTestName),
    )
    
    const on = jest.fn()
    const off = jest.fn()
    testSwitch.on(on)
    testSwitch.off(off)
    
    client.publish(testSwitch.config.commandTopic, "junk")
    expect(on).not.toHaveBeenCalled()
    expect(off).not.toHaveBeenCalled()
  })

  test("add state topic param", () => {
    const name = _.camelCase(expect.getState().currentTestName)
    const stateTopic = `somecustomthing/switch/${name}/state`
    const testSwitch = new Switch(
      client,
      name,
      {stateTopic}
    )
    
    const on = jest.fn()
    const off = jest.fn()
    testSwitch.on(on)
    testSwitch.off(off)
  
    client.publish(testSwitch.config.commandTopic, ISwitchOptions.ON)

    expect(msgHandler).toHaveBeenCalledWith(stateTopic, ISwitchOptions.ON)
    expect(on).toHaveBeenCalledTimes(1)
    expect(off).toHaveBeenCalledTimes(0)
  })

  test("add command topic param", () => {
    const name = _.camelCase(expect.getState().currentTestName)
    const commandTopic = `somecustomthing/switch/${name}/set`
    const testSwitch = new Switch(
      client,
      name,
      {commandTopic}
    )
    
    const on = jest.fn()
    const off = jest.fn()
    testSwitch.on(on)
    testSwitch.off(off)
  
    client.publish(testSwitch.config.commandTopic, ISwitchOptions.ON)

    expect(msgHandler).toHaveBeenCalledWith(commandTopic, ISwitchOptions.ON)
    expect(on).toHaveBeenCalledTimes(1)
    expect(off).toHaveBeenCalledTimes(0)
  })

  test("add uniqueId param", () => {
    const name = _.camelCase(expect.getState().currentTestName)
    const uniqueId = `somecustomthing`

    const testSwitch = new Switch(
      client,
      name,
      {uniqueId}
    )
    
    expect(testSwitch.config.uniqueId).toEqual(uniqueId)
    expect(msgHandler).toHaveBeenCalledWith(
      testSwitch.discoveryTopic, 
      expect.stringContaining(`"name":"${name}"`)
    )
  })

  test("state retain", () => {
    const name = _.camelCase(expect.getState().currentTestName)
    const stateTopic = `somecustomthing/switch/${name}/state`

    client.publish(stateTopic, ISwitchOptions.ON, { retain: true })

    const testSwitch = new Switch(
      client,
      name,
      { stateTopic }
    )

    expect(testSwitch.state).toEqual(ISwitchOptions.ON)
  })
})

