
class Loger {
    level;
    next = null;

    setNext(next) {
        this.next = next;
    }

    getNext() {
        return this.next;
    }

    logMsg(level, msg) {
        if (this.level == level) {
            this.write(msg);
        } else {
            this.getNext().logMsg(level, msg);
        }
    }

    write() {
        throw Error("需要子类复写方法");
    }
}

class InfoLoger extends Loger {
    level = 1;
    write(msg) {
        console.log("Info", msg);
    }
}

class WarnLoger extends Loger {
    level = 2;
    write(msg) {
        console.warn("Warn", msg);
    }
}

class ErrorLoger extends Loger {
    level = 3;
    write(msg) {
        console.error("Error", msg);
    }
}

let infoLoger = new InfoLoger();
let warnLoger = new WarnLoger();
let errorLoger = new ErrorLoger();

infoLoger.setNext(warnLoger);
warnLoger.setNext(errorLoger);
errorLoger.setNext(infoLoger);

infoLoger.logMsg(1, "hello");
infoLoger.logMsg(2, "hello");
errorLoger.logMsg(2, "hello");