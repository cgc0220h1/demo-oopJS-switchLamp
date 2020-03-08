let Switch = function (device) {
    this.state = false;
    this.linkTo = device;

    this.getState = function () {
        return this.state;
    };

    this.getDevice = function () {
        return this.linkTo;
    };

    this.switchOn = function (device) {
        this.state = true;
        device.state = true;
        document.getElementById('switch').src = "img/switch_on.png";
    };

    this.switchOff = function (device) {
        this.state = false;
        device.state = false;
        document.getElementById('switch').src = "img/switch_off.png";
    };
};

let Lamp = function () {
    this.state = false;

    this.light = function () {
        if (this.state) {
            return document.getElementById('light').src = "img/light_on.png";
        }
        return document.getElementById('light').src = "img/light_off.png"
    };
};

let bedLamp = new Lamp();
let bedSwitch = new Switch(bedLamp);

function flipSwitch() {
    if (bedSwitch.getState()) {
        bedSwitch.switchOff(bedLamp);
    } else {
        bedSwitch.switchOn(bedLamp);
    }
    bedLamp.light();
}
