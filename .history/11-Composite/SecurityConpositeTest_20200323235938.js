class Component {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Leaf extends Component {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Composite extends Component {

    constructor(name) {
        super(name);
        this.childrenList = [];
    }

    add(com) {
        this.childrenList.push(com)
    }

    remove(i) {
        this.childrenList.splice(i, 1)
    }

    getChild(i) {
        return this.childrenList[i];
    }

    visit() {
        console.log(this.getName());
        this.childrenList.forEach(element => {
            if (element instanceof Composite) {
                element.visit();
            }
        });
    }
}

let d1 = new Composite("树干");
let d11 = new Composite("树干1");
d1.add(d11);

let f11 = new Leaf("树叶111");
d11.add(f11);
let d12 = new Composite("树干2");
d1.add(d12);
let d13 = new Composite("树干2");
d1.add(d13);

d1.visit();
