/**
 * 策略模式则是以接口形式提供抽象接口。由具体实现类提供不同算法。策略模式一般由3部分组成
 * 一个Context持有所有策略实现类引用，提供给客户端运行
 * 一个策略接口提供
 * 具体的策略实现类
 */

class TripStrategy {
    constructor(name) {
        this.name = name;
    }

    go() {
        throw Error("需要子类复写方法");
    }
}

class BikeStrategy extends TripStrategy {
    constructor(name) {
        super(name);
    }
    go() {
        console.log("骑车去");
    }
}

class CarStrategy extends TripStrategy {
    constructor(name) {
        super(name);
    }

    go() {
        console.log("开车去");
    }
}

class Template {
    constructor(name) {
        this.name = name;
    }

    setGoStrategy(strategy) {
        this.strategy = strategy;
    }

    TemplateMethod() {
        this.goOut();
        this.goToSomePlace();
        this.doSomeThing();
        this.goHome();
    }

    goOut() {
        console.log("出门");
    }

    doSomeThing() {

    }

    goToSomePlace() {
        this.strategy.go();
    }

    goHome() {
        console.log("回家");
    }

}

class Journey extends Template {
    constructor(name) {
        super(name);
    }

    doSomeThing() {
        console.log("西湖玩一圈");
    }
}

class Work extends Template {
    constructor(name) {
        super(name);
    }

    doSomeThing() {
        console.log("杭州加班48小时");
    }

}

let work = new Work();
work.setGoStrategy(new BikeStrategy());
work.TemplateMethod();

console.log("=======================================");

let journey = new Journey();
journey.setGoStrategy(new CarStrategy());
journey.TemplateMethod();