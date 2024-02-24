import { IClientOptions, IClientPublishOptions } from "mqtt";


type Handler = (topic: string, message: string) => void
type Message = {
  topic: string,
  message: string,
}
const mqtt = jest.createMockFromModule("mqtt");
const handlers: Handler[] = [];
const retainedMessages: Message[] = []

const client = {
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
  subscribe: jest.fn(() => {
    if(retainedMessages.length > 0) {
      retainedMessages.forEach(({topic, message}) => {
        handlers.forEach(handler => {
          handler(topic, message)
        })
      })
    }
  }),
  end: jest.fn(),
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const connectAsync = jest.fn((url: string, opts: IClientOptions) => {
  return client
})

export default mqtt;
