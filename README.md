# Hass-JStoMQTT

This repository enables you to write Home Assistant entities in Javascript that can perform arbitrary operations or fetch statuses or values in a familiar language without having to use input booleans or additional helpers. 

This library uses MQTT to provide the discovery data to Home Assistant whilst you provide handlers for the operations of the entities your trying to create. 


### Usage

#### Connect to MQTT

Its built to be compatible to the [MQTT.js](https://github.com/mqttjs/MQTT.js) library which you initialise and pass as a parameter to the Classes for whichever entity you want to create.

```js
import { connectAsync as connect } from "mqtt"

const mqttClient = await connect("tcp://localhost:1883", {})
```

#### Switch 

```js
import { Switch } from 'hass-jstomqtt'

const customswitch = new Switch(mqttClient, "atestSwitch")

customswitch.on(() => {
  console.log("This runs when the switch turns ON")
})

customswitch.off(() => {
  console.log("This runs when the switch turns OFF")
})
```

#### Binary sensor

```js
import { BinarySensor } from 'hass-jstomqtt'

const customsensor = new BinarySensor(mqttClient, "atestsensor")

// do something
customswitch.on()

// do something else
customswitch.off()
```

#### Button

```js
import { Button } from 'hass-jstomqtt'

const customButton = new Button(
  client,
  "atestbutton",
)

customButton.press(() => {
  console.log("Button Pressed")
})
```


## Todo

#### Tasks

- [ ] CI
- [ ] Docs
  - [ ] API
  - [ ] Deployment
  - [ ] Development

#### Entity types

- [x] Switch
- [x] Binary sensor
- [ ] Sensors
- [x] Button
- [ ] Event
- [ ] Light?

#### Others

- [ ] Device support
