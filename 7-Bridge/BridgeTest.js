class ElectricalAppliance {
    constructor(name) {
        this.name = name;
    }

    description() {
        return "品名: " + this.name;
    }
}

class AirConditioner extends ElectricalAppliance {
    constructor() {
        super("空调")
    }
}

class WashingMachine extends ElectricalAppliance {
    constructor() {
        super("洗衣机")
    }
}

class Brand {
    constructor(name, electricalAppliance) {
        this.name = name
        this.electricalAppliance = electricalAppliance;
    }

    description() {
        return "品牌: " + this.name + "  " + this.electricalAppliance.description();
    }
}


class Midea extends Brand{
    constructor(electricalAppliance) {
        super("美的", electricalAppliance)
    }
}

class Gree extends Brand{
    constructor(electricalAppliance) {
        super("格力", electricalAppliance)
    }
}

let mideaWashingMachine = new Midea(new WashingMachine());
console.log(mideaWashingMachine.description())
let greeWashingMachine = new Gree(new WashingMachine());
console.log(greeWashingMachine.description())

let mideaAirConditioner = new Midea(new AirConditioner());
console.log(mideaAirConditioner.description())
let greeAirConditioner = new Gree(new AirConditioner());
console.log(greeAirConditioner.description())