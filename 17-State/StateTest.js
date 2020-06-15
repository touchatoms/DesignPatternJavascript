
class LiftState {

    context;

    setContext(context) {
        this.context = context;
    }

    open() {

    }

    close() {

    };

    run() {

    }

    stop() {

    }
}

class OpenedState extends LiftState {
    open() {
        console.log("电梯开门");
    }

    close() {
        this.context.setState(this.context.closedState);
        this.context.getState().setContext(this.context);
        this.context.getState().close();
    };

    run() {
        // console.error("电梯开门，不能运行");
    }

    stop() {
        // console.error("电梯开门，不能停止");
    }
}


class StopState extends LiftState {
    
    open() {
        this.context.setState(this.context.openState);
        this.context.getState().setContext(this.context);
        this.context.getState().open();
    }

    close() {

    };

    run() {
        this.context.setState(this.context.runningState);
        this.context.getState().setContext(this.context);
        this.context.getState().run();
    }

    stop() {
        console.log("电梯停止");
    }
}


class ClosedState extends LiftState {

    open() {
        this.context.setState(this.context.openState);
        this.context.getState().setContext(this.context);
        this.context.getState().open();
    }

    close() {
        console.log("电梯关闭");
    };

    run() {
        this.context.setState(this.context.runningState);
        this.context.getState().setContext(this.context);
        this.context.getState().run();
    }

    stop() {
        this.context.setState(this.context.closedState);
        this.context.getState().setContext(this.context);
        this.context.getState().stop();
    }
}


class RunningState extends LiftState {
    
    open() {
        
    }

    close() {

    };

    run() {
        console.log("电梯运行");
    }

    stop() {
        this.context.setState(this.context.stopedState);
        this.context.getState().setContext(this.context);
        this.context.getState().stop();
    }
}

class Context {

    openState;
    stopedState;
    runningState;
    closedState;

    state;

    constructor() {
        this.openState = new OpenedState();
        this.stopedState = new StopState();
        this.runningState = new RunningState();
        this.closedState = new ClosedState();
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }

    open() {
        this.state.open();
    }

    close() {
        this.state.close();
    };

    run() {
        this.state.run();
    }

    stop() {
        this.state.stop();
    }
}

let context = new Context();

context.setState(context.closedState);

context.open();
console.log("开门-----^");
context.run();
console.log("开门-----v");
context.close();
context.run();
console.log("运行时-----^");
context.open();
console.log("运行时-----v");
context.stop();
context.open();