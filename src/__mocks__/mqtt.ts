


const mqtt = jest.createMockFromModule("mqtt");
const handlers = [];
const retainedMessages = []
const client = {
  on: jest.fn((type: string, handler: () => void) => {
    if(type === "message") {
      handlers.push(handler)
    }
  }),
  publish: jest.fn((topic: string, message: string, opts?: any) => {
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

export const connectAsync = jest.fn(async (url: string, opts: any) => {
  return client
})

export default mqtt;
