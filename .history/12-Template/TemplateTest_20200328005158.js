class BankTransaction {
    constructor(name) {
        this.name = name;
    }
    takeANumber(com) {
        console.log("获得了一个号");
    }

    queue(i) {
        console.log("正在排队中");
    }

    doTransaction() {
        throw Error("需要子类复写方法");
    }

    evaluate() {
        console.log("评价");
    }
}

class DepositTransaction extends BankTransaction {
    constructor(name) {
        super(name);
    }

    doTransaction() {
        console.log("存钱1元");
    }

}


class WithdrawTransaction extends BankTransaction {
    constructor(name) {
        super(name);
    }

    doTransaction() {
        console.log("取");
    }
}
let d1 = new Composite("树干");
let d11 = new Composite("树干1");
d1.add(d11);

let f11 = new Leaf("树叶111");
d11.add(f11);
let d12 = new Composite("树干2");
d1.add(d12);
let d13 = new Composite("树干3");
d1.add(d13);

d1.visit();
