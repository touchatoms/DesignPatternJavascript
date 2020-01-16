
class Light {
    constructor(name) {
        this.name = name;
    }

    turnOn() {
        return this.name + "开启";
    }

    turnOff() {
        return this.name + "GB";
    }
}

class TV {
    constructor(name) {
        this.name = name;
    }

    turnOn() {
        return this.name + "开启";
    }

    turnOff() {
        return this.name + "GB";
    }
}

class Curtain {
    constructor(name) {
        this.name = name;
    }

    turnOn() {
        return this.name + "开启";
    }

    turnOff() {
        return this.name + "GB";
    }
}

class XiaoAI {
    constructor(name) {
        this.name = name;
    }

    setCurtain(curtain) {
        this._curtain = curtain;
    }

    getCurtain() {
        return this._curtain;
    }

    setTv(tv) {
        this._tv = tv;
    }

    getTv() {
        return this._tv;
    }

    setLight(light) {
        this._light = light;
    }

    getLight() {
        return this._light;
    }

    gotHome() {
        console.log("主人，欢迎回家~");
        console.log(this.getCurtain().turnOn());
        console.log(this.getLight().turnOn());
        console.log(this.getTv().turnOn());
    }

    goOut() {
        console.log("主人，一路顺丰~");
        console.log(this.getCurtain().turnOff());
        console.log(this.getLight().turnOff());
        console.log(this.getTv().turnOff());
    }
}


let xiaoAI = new XiaoAI();

xiaoAI.setCurtain(new Curtain("小米智能窗帘"));
xiaoAI.setTv(new TV("小米电视"));
xiaoAI.setLight(new Light("小米台灯"));

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
xiaoAI.gotHome();

setTimeout(function() {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    xiaoAI.goOut()
}, 5000)