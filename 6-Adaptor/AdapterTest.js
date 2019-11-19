
class Motor {
    constructor(motorName) {
        this.motorName = motorName;
    }

    drive() {
        console.log(this.motorName + ": drive");
    }
}

class ElectricMotor {
    constructor() {
        this.name = "电动机";
    }

    driveElectric() {
        console.log(this.name + ": drive");
    }
}


class GasMotor {
    constructor() {
        this.name = "内燃机";
    }

    driveGas() {
        console.log(this.name + ": drive");
    }
}


class ElectricAdapter {
    constructor(motor) {
        this.name = "电动机适配器";
        this.motor = motor;
        console.log(this.name + " 配置 " + this.motor.name);
    }

    drive() {
        this.motor.driveElectric();
    }
}


class GasAdapter {
    constructor(motor) {
        this.name = "内燃机适配器";
        this.motor = motor;
        console.log(this.name + " 配置 " + this.motor.name);
    }

    drive() {
        this.motor.driveGas();
    }
}

let em = new ElectricMotor();
let gm = new GasMotor();

let ga = new GasAdapter(gm);
let ea = new ElectricAdapter(em);

ga.drive();
ea.drive();