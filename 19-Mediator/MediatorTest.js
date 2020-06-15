
class Mediator {

}

class WeixinQun extends Mediator {

    clientList = [];

    register(client) {
        this.clientList.push(client);

    }
    send(client, msg) {
        this.clientList.forEach(element => {
            if (client != element) {
                element.receiveMsg(msg);
            }
        });
    }
}

class ChatClinet {
    mediator = null;
    constructor(mediator) {
        this.mediator = mediator;
        this.mediator.register(this);
    }
    sendMsg() {

    }
    receiveMsg() {

    }
}

class Tony extends ChatClinet {
    constructor(mediator) {
        super(mediator);
    }
    sendMsg(msg) {
        this.mediator.send(this, msg);
    }
    receiveMsg(msg) {
        console.log("Tony got a msg:" + msg);
    }
}


class Peter extends ChatClinet {
    constructor(mediator) {
        super(mediator);
    }
    sendMsg(msg) {
        this.mediator.send(this, msg);
    }
    receiveMsg(msg) {
        console.log("Peter got a msg:" + msg);
    }
}


class Ellen extends ChatClinet {
    constructor(mediator) {
        super(mediator);
    }
    sendMsg(msg) {
        this.mediator.send(this, msg);
    }
    receiveMsg(msg) {
        console.log("Elen got a msg:" + msg);
    }
}


let JsQun = new WeixinQun();

let peter = new Peter(JsQun);
let tony = new Tony(JsQun);

let ellen = new Ellen(JsQun);

peter.sendMsg("hello everyone, I am Peter");
tony.sendMsg("hello everyone, I am Tony");
ellen.sendMsg("hello everyone, I am Elen");

