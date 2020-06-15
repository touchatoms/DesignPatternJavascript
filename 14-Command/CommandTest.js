/**
 *
 */
class IControl {
    execute() {
        throw Error("需要子类复写方法");
    }
}

class Tv {
    TurnOn() {
        console.log("电视机打开了");
    }
    TurnOff() {
        console.log("电视机关闭了");
    }
    SwitchChannel() {
        console.log("电视机切换频道");
    }
}

class Light {
    TurnOn() {
        console.log("电灯打开了");
    }
    TurnOff() {
        console.log("电灯关闭了");
    }
}

class LightOn extends IControl {
    constructor(light) {
        super();
        this.light = light;
    }
    execute() {
        this.light.TurnOn();
    }
}

class LightOff extends IControl {
    constructor(light) {
        super();
        this.light = light;
    }
    execute() {
        this.light.TurnOff();
    }
}

class TvOn extends IControl {
    constructor(tv) {
        super();
        this.tv = tv;
    }
    execute() {
        this.tv.TurnOn();
    }
}

class TvOff extends IControl {
    constructor(tv) {
        super();
        this.tv = tv;
    }
    execute() {
        this.tv.TurnOff();
    }
}

class TvSwitch extends IControl {

    constructor(tv) {
        super();
        this.tv = tv;
    }
    execute() {
        this.tv.SwitchChannel();
    }
}

class RemoteControl {
    onCommands = {};
    offCommands = {};
    switchCommands = {};
    AddOnCommand(machine, control) {
        this.onCommands[machine] = control;
    }
    AddOffCommand(machine, control) {
        this.offCommands[machine] = control;
    }
    AddSwitchCommand(machine, control) {
        this.switchCommands[machine] = control;
    }
    PressOnButton(machine) {
        this.onCommands[machine].execute();
    }
    PressOffButton(machine) {
        this.offCommands[machine].execute();
    }
    PressSwitchButton(machine) {
        this.switchCommands[machine].execute();
    }
}

let light = new Light();
let tv = new Tv();

let turnLightOn = new LightOn(light);
let turnLightOff = new LightOff(light);

let turnTvOn = new TvOn(tv);
let turnTvOff = new TvOff(tv);
let switchTv = new TvSwitch(tv);

let control = new RemoteControl();
control.AddOnCommand("Light", turnLightOn);
control.AddOffCommand("Light", turnLightOff);

control.AddOnCommand("Tv", turnTvOn);
control.AddOffCommand("Tv", turnTvOff);
control.AddSwitchCommand("Tv", switchTv);
control.PressOnButton("Light");
control.PressOffButton("Light");

control.PressOnButton("Tv");
control.PressSwitchButton("Tv");
control.PressOffButton("Tv");
