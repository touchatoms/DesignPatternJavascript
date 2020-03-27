/**
 * 享元（Flyweight）模式的定义：
 * 运用共享技术来有効地支持大量细粒度对象的复用。
 * 它通过共享已经存在的又橡来大幅度减少需要创建的对象数量、避免大量相似类的开销，从而提高系统资源的利用率。
 */
class Circle {
    constructor() {
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    setColor(color) {
        this.color = color;
    }

    draw() {
        console.log("画圆: 颜色(" + this.color + ") 位置(" + this.x + "," + this.y + ")");
    }
}

class CircleFactory {
    getCircle() {
        if (this.circle == null) {
            console.log(this.circle);
            this.circle = new Circle();
        }
        return this.circle;
    }
}

let CF = new CircleFactory()

for (let i = 0; i < 10; i++) {
    let circle = CF.getCircle();
    circle.setColor(Math.round(Math.random() * 100) + ","
        + Math.round(Math.random() * 100) + "," + Math.round(Math.random() * 100));
    circle.setPosition(Math.round(Math.random() * 1138), Math.round(Math.random() * 640));
    circle.draw();
}
