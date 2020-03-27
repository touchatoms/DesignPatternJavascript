class FileComponent {
    add(com) {

    }
    remove(com) {

    }

    getChild(i) {

    }
}

class File extends FileComponent {

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

class Directory extends FileComponent {

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