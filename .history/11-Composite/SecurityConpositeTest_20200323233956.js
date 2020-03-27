class FComponent {
    add(com) {

    }
    remove(com) {

    }

    getChild(i) {

    }
}

class File extends FComponent {

    constructor(name) {
        this.name = name;
    }

    add(com) {

    }

    remove(com) {

    }

    getChild(i) {

    }
}

class DirectoryComposite extends FComponent {

    constructor(name) {
        this.name = name;
        this.childrenList = [];
    }

    add(com) {
        this.childrenList.push(com)
    }

    remove(i) {
        this.childrenList.splice(i, 1)
    }

    getChild(i) {
        returnthis.childrenList[i];
    }
}

let d1 = new DirectoryComposite("")
