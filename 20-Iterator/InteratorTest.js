
/**
 * 迭代器模式主要包含以下角色。
 * 抽象聚合（Aggregate）角色：定义存储、添加、删除聚合对象以及创建迭代器对象的接口。
 * 具体聚合（ConcreteAggregate）角色：实现抽象聚合类，返回一个具体迭代器的实例。
 * 抽象迭代器（Iterator）角色：定义访问和遍历聚合元素的接口，通常包含 hasNext()、first()、next() 等方法。
 * 具体迭代器（Concretelterator）角色：实现抽象迭代器接口中所定义的方法，完成对聚合对象的遍历，记录遍历的当前位置。
*/

class List {
    add() { }
    createIterator() { }
}

class Iterator {
    hasNext() { }
    next() { }
}

class MusicIterator extends Iterator {

    musicList = [];
    position = 0;

    constructor(list) {
        super();
        this.musicList = list;
    }

    hasNext() {
        return this.position < this.musicList.length;
    }
    next() {
        let music = this.musicList[this.position];
        this.position = this.position + 1;
        return music;
    }
}

class MusicList extends List {
    musicList = [];
    position = 0;

    add(musicName) {
        this.musicList[this.position] = musicName;
        this.position = this.position + 1;
    }

    iterator() {
        return new MusicIterator(this.musicList);
    }
}

let musicList = new MusicList();

musicList.add("往后余生");
musicList.add("桥边姑娘");
musicList.add("再回首");
musicList.add("同桌的你");

console.log(`播放列表: ${musicList.musicList}`);


let iterator = musicList.iterator();

while (iterator.hasNext()) {
    console.log(`播放《${iterator.next()}》`);
}
