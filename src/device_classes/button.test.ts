import { MqttClient, connectAsync as connect } from "mqtt";
import { Button } from "./button";
import _ from "lodash";

let client: MqttClient

const msgHandler = jest.fn()

beforeAll(async () => {
  client = await connect("foo", {})
  client.on("message", msgHandler)
});

afterEach(() => {
  msgHandler.mockClear()
})

describe("Button", () => {
  test("Press", () => {
    const testButton = new Button(
      client,
      _.camelCase(expect.getState().currentTestName),
    )
    
    const press: () => void = jest.fn()
    testButton.press(press)
    
    client.publish(testButton.config.commandTopic, "PRESS")
    expect(press).toHaveBeenCalledTimes(1)
  })

  test("custom press", () => {
    const payloadPress = "PRESSSSSSSS"
    const testButton = new Button(
      client,
      _.camelCase(expect.getState().currentTestName),
      { payloadPress }
    )
    
    const press: () => void = jest.fn()
    testButton.press(press)
    
    client.publish(testButton.config.commandTopic, payloadPress)
    expect(press).toHaveBeenCalledTimes(1)
  })

  test("handler error", () => {
    const testButton = new Button(
      client,
      _.camelCase(expect.getState().currentTestName),
    )
    
    const press: () => void = jest.fn(() => {
      throw new Error("test")
    })
    testButton.press(press)
    
    client.publish(testButton.config.commandTopic, "PRESS")
    expect(press).toHaveBeenCalledTimes(1)
  })
})

