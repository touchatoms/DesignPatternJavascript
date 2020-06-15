/**
 * 模板模式=>一个抽象类中，有一个主方法，再定义1...n个方法，可以是抽象的，也可以是实际的方法，
 * 定义一个类，继承该抽象类，重写抽象方法，通过调用抽象类，实现对子类的调用 
 */

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
        console.log("取钱1元");
    }
}



let withdraw = new WithdrawTransaction();

withdraw.takeANumber();
withdraw.queue();
withdraw.doTransaction();
withdraw.evaluate();

console.log("=======================================");

let deposit = new DepositTransaction();
deposit.takeANumber();
deposit.queue();
deposit.doTransaction();
deposit.evaluate();