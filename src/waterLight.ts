var rpio = require("rpio");
import {setup, turnOnPin, turnOffPin} from "./helpers/gpio"
import {deviceList, device} from "./helpers/types"
//Setup GPIO for each LED
let devices:deviceList = {
    "led":{
        "1":{
            type:"led",
            pin:11
        },
        "2":{
            type:"led",
            pin:12
        },
        "3":{
            type:"led",
            pin:13
        },
        "4":{
            type:"led",
            pin:15
        },
        "5":{
            type:"led",
            pin:16
        },
        "6":{
            type:"led",
            pin:18
        },
        "7":{
            type:"led",
            pin:22
        },
        "8":{
            type:"led",
            pin:3
        },
        "9":{
            type:"led",
            pin:5
        },
        "10":{
            type:"led",
            pin:24
        },
    }
}

setup(devices);

function turnOnAllLeds():void {
    Object.values(devices.led).forEach(turnOnPin);
}
function turnOffAllLeds():void {
    Object.values(devices.led).forEach(turnOffPin);
}
turnOnAllLeds()
setTimeout(turnOffAllLeds, 5000);