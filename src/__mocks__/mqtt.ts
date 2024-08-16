import { IClientOptions, IClientPublishOptions, MqttClient } from "mqtt";


type Handler = (topic: string, message: string) => void
type Message = {
  topic: string,
  message: string,
}
const mqtt = jest.createMockFromModule("mqtt");
const handlers: Handler[] = [];
const retainedMessages: Message[] = []

const client: MqttClient = {
  on: jest.fn((type: string, handler: Handler) => {
    if(type === "message") {
      handlers.push(handler)
    }
  }),
  publish: jest.fn((topic: string, message: string, opts?: IClientPublishOptions) => {
    handlers.forEach(handler => {
      handler(topic, message)
    })
    if(opts && opts.retain) {
      retainedMessages.push({topic, message})
    }
  }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  subscribe: jest.fn((_0: string, _1: {qos: number}, cb: (err?: Error) => void ) => {
    if(retainedMessages.length > 0) {
      retainedMessages.forEach(({topic, message}) => {
        handlers.forEach(handler => {
          handler(topic, message)
        })
      })
    }
    cb()
  }),
  end: jest.fn(),
} as unknown as jest.Mocked<MqttClient>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const connectAsync = jest.fn((url: string, opts: IClientOptions) => {
  return client
})

export default mqtt;
