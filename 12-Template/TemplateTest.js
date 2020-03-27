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