class BakeComponent {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    getName() {
        return this.name;
    }
}

class CakeComponent extends BakeComponent {
    constructor() {
        super("蛋糕", 100)
    }
}

class PastryComponent extends BakeComponent {
    constructor() {
        super("糕点", 10)
    }
}

class Decorator {
    constructor(component, name, price) {
        this.component = component
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return (this.price + this.component.getPrice());
    }

    getName() {
        return this.name + this.component.getName();
    }
}

class CreamDecorator extends Decorator{
    constructor(component, name, price) {
        super(component, "奶油", 5)
    }
}

class CherryDecorator extends Decorator{
    constructor(component, name, price) {
        super(component, "樱桃", 2)
    }
}

let d11 = new CreamDecorator(new PastryComponent());
console.log(d11.getName(), d11.getPrice())
let d12 = new CherryDecorator(new PastryComponent());
console.log(d12.getName(), d12.getPrice())


let d21 = new CreamDecorator(new CakeComponent());
console.log(d21.getName(), d21.getPrice())
let d22 = new CherryDecorator(new CakeComponent());
console.log(d22.getName(), d22.getPrice())


let d31 = new CreamDecorator(new CakeComponent());
let d32 = new CherryDecorator(d31);
console.log(d32.getName(), d32.getPrice())
