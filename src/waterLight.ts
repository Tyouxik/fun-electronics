var rpio = require("rpio");

//Setup GPIO for each LED
let LEDPins: number[] = [11, 12, 13, 15, 16, 18, 22, 3, 5, 24];

function openOutputPin(pin:number):void {
    rpio.open(pin, rpio.OUTPUT);
    console.log(`Pin ${pin} is now open for output`);
}

function openLEDPins(LEDPins:number[]):void {
    LEDPins.forEach(openOutputPin);
    console.log("All pins are open for output");
    
}

function turnOffPin(pin:number) {
    rpio.write(pin, rpio.HIGH);
}

function turnOffLEDs(LEDPins:number[]):void {
    LEDPins.forEach(turnOffPin)
}
function turnOnPin(pin:number) {
    rpio.write(pin, rpio.HIGH);
}

function turnOnLEDs(LEDPins:number[]):void {
    LEDPins.forEach(turnOnPin)
}
openLEDPins(LEDPins);

turnOnLEDs(LEDPins);

