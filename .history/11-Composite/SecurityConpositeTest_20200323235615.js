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
            element.visit();
        });

    }
}

let d1 = new DirectoryComposite("文件夹1");
let d11 = new DirectoryComposite("文件夹11");
d1.add(d11);

let f11 = new File("文件111");
d11.add(f11);
let d12 = new DirectoryComposite("文件夹12");
d1.add(d12);
let d13 = new DirectoryComposite("文件夹13");
d1.add(d13);

d1.visit();
