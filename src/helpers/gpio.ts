var rpio = require("rpio");
import { deviceList, device } from "./types";

// Setup

function openOutputPin(output:device):void {
    rpio.open(output.pin, rpio.OUTPUT);
    console.log(`Pin ${output.pin} is now open for output: ${output.type}`);
}

function openInputPin(input:device):void {
    rpio.open(input.pin, rpio.INPUT);
    console.log(`Pin ${input.pin} is now open for input: ${input.type}`);
}


function setup(devices:deviceList):void {
    rpio.init({mock: 'raspi-3'});
    const leds = devices.led
    for(let led in leds) {
        openOutputPin(leds[led]);
    }
 }

// On & Off pins

function turnOnPin(input:device):void {
    rpio.write(input.pin, rpio.HIGH);
    console.log(`${input.type} on pin ${input.pin} is now ON`);
}

function turnOffPin(input:device):void {
    rpio.write(input.pin, rpio.LOW);
    console.log(`${input.type} on pin ${input.pin} is now OFF`);
}

export {setup, turnOnPin, turnOffPin}