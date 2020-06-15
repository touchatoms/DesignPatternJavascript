
/**
 * 访问者模式包含以下主要角色。
 * 抽象访问者（Visitor）角色：定义一个访问具体元素的接口，为每个具体元素类对应一个访问操作 visit() ，
 *      该操作中的参数类型标识了被访问的具体元素。
 * 具体访问者（ConcreteVisitor）角色：实现抽象访问者角色中声明的各个访问操作，确定访问者访问一个元素时该做什么。
 * 抽象元素（Element）角色：声明一个包含接受操作 accept() 的接口，被接受的访问者对象作为 accept() 方法的参数。
 * 具体元素（ConcreteElement）角色：实现抽象元素角色提供的 accept() 操作，其方法体通常都是 visitor.visit(this)，
 *      另外具体元素中可能还包含本身业务逻辑的相关操作。
 * 对象结构（Object Structure）角色：是一个包含元素角色的容器，提供让访问者对象遍历容器中的所有元素的方法，
 *      通常由 List、Set、Map 等聚合类实现。
 */

/**
 * Element
 */
class Element {
    name = "";
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    accept(visitor) {
        visitor.visit(this);
    }
}

/**
 * ConcreteElement
 */
class Student extends Element {

    score = 0;
    paperCount = 0;
    constructor(name, score, paperCount) {
        super(name);
        this.score = score;
        this.paperCount = paperCount;
    }

    getScore() {
        return this.score;
    }

    getPaperCount() {
        return this.paperCount;
    }
}

/**
 * ConcreteElement
 */
class Teacher extends Element {
    score = 0;
    paperCount = 0;
    constructor(name, score, paperCount) {
        super(name);
        this.score = score;
        this.paperCount = paperCount;
    }

    getScore() {
        return this.score;
    }

    getPaperCount() {
        return this.paperCount;
    }
}

class Visitor {
    visit() { }
}


class ResearcherSelection extends Visitor {
    visit(element) {
        if (element instanceof Teacher) {
            if (element.getPaperCount() > 5) {
                console.log(`${element.getName()}的论文数是${element.getPaperCount()}，荣获了科研优秀奖。`);
            }
        } else if (element instanceof Student) {
            if (element.getPaperCount() > 1) {
                console.log(`${element.getName()}的论文数是${element.getPaperCount()}，荣获了科研优秀奖。`);
            }
        }
    }
}

class ScoreSelection extends Visitor {
    visit(element) {
        if (element instanceof Teacher) {
            if (element.getScore() > 90) {
                console.log(`${element.getName()}的分数是${element.getScore()}，荣获了成绩优秀奖。`);
            }
        } else if (element instanceof Student) {
            if (element.getScore() > 1) {
                console.log(`${element.getName()}的分数是${element.getScore()}，荣获了成绩优秀奖。`);
            }
        }
    }
}

class VisitorStructure {
    elements = new Array();

    accept(visitor) {
        for (let i = 0; i < this.elements.length; i++) {
            let element = this.elements[i];
            element.accept(visitor);
        }
    }

    addElement(element) {
        this.elements.push(element);
    }
}

let stu1 = new Student("Student Jim", 92, 3);
let stu2 = new Student("Student Ana", 89, 1);
let t1 = new Teacher("Teacher Mike", 83, 10);
let t2 = new Teacher("Teacher Lee", 88, 7);

let visitorStructure = new VisitorStructure();
visitorStructure.addElement(stu1);
visitorStructure.addElement(stu2);
visitorStructure.addElement(t1);
visitorStructure.addElement(t2);

let gradeSelection = new ScoreSelection();
visitorStructure.accept(gradeSelection);

let researcherSelection = new ResearcherSelection();
visitorStructure.accept(researcherSelection);