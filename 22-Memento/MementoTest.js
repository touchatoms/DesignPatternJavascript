/**
 * 备忘录模式的主要角色如下。
 * 发起人（Originator）角色：记录当前时刻的内部状态信息，提供创建备忘录和恢复备忘录数据的功能，实现其他业务功能，它可以访问备忘录里的所有信息。
 * 备忘录（Memento）角色：负责存储发起人的内部状态，在需要的时候提供这些内部状态给发起人。
 * 管理者（Caretaker）角色：对备忘录进行管理，提供保存与获取备忘录的功能，但其不能对备忘录的内容进行访问与修改。
 */
// Super Mario Odyssey
/**
 * Menento
 */
class Menento {
    lifeValue = 0;
    checkPoint = "";
    starNumber = 0;
    constructor(checkPoint, lifeValue, starNumber) {
        this.lifeValue = lifeValue;
        this.checkPoint = checkPoint;
        this.starNumber = starNumber;
    }

    getInfo() {
        return `任务点：${this.checkPoint}; 血量：${this.lifeValue}; 星星数量：${this.starNumber}`;
    }
}

/**
 * 超级 马里奥 奥德赛 
 * Originator
 */
class SuperMarioOdyssey {
    checkPoint = "";
    lifeValue = 0;
    starNumber = 0;
    constructor(checkPoint, lifeValue, starNumber) {
        this.checkPoint = checkPoint;
        this.lifeValue = lifeValue;
        this.starNumber = starNumber;
    }

    play() {
        console.log(`开始游戏：${this.checkPoint} 当前星星数量：${this.starNumber}。`);
        this.lifeValue = this.lifeValue - 1;
        this.starNumber = this.starNumber + 1;
        console.log(`成功完成挑战，获取一颗星星。当前星星数量：${this.starNumber}。`);
    }

    createMemento() {
        let m = new Menento(this.checkPoint, this.lifeValue, this.starNumber);
        return m;
    }

    restore(memento) {
        this.checkPoint = memento.checkPoint;
        this.lifeValue = memento.lifeValue;
        this.starNumber = memento.starNumber;
        console.log(`恢复存档，当前进度：${this.getInfo()}`);
    }

    getInfo() {
        return `任务点：${this.checkPoint}; 血量：${this.lifeValue}; 星星数量：${this.starNumber}`;
    }

    quit() {
        console.log(`离开游戏，当前进度：${this.getInfo()}`);
    }
}

class CareTaker {
    memento = null;

    //存档
    archive(memento) {
        this.memento = memento;
    }

    //获取存档
    getMemento() {
        return this.memento;
    }
}

let superMarioOdyssey = new SuperMarioOdyssey("沙之国", 3, 0);
superMarioOdyssey.play();

let careTaker = new CareTaker();
careTaker.archive(superMarioOdyssey.createMemento());
superMarioOdyssey.quit();

let superMarioOdyssey2 = new SuperMarioOdyssey();
superMarioOdyssey2.restore(careTaker.getMemento());
superMarioOdyssey2.play();
superMarioOdyssey2.quit();