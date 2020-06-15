//抽象观察者
class WeatherObserver {

}

//具体观察者1
class FarmerObserver extends WeatherObserver {
    response(weatherType) {
        switch (weatherType) {
            case "sunny":
                console.log("Farmer去操场晒粮食");
                break;

            case "rainy":
                console.log("Farmer去操场收粮食");
                break;
        }
        
    }
}

class FishermenObserver extends WeatherObserver {
    response(weatherType) {
        switch (weatherType) {
            case "sunny":
                console.log("Fishermen出海打渔");
                break;

            case "rainy":
                console.log("Fishermen出海打渔");
                break;

            case "high wind":
                console.log("Fishermen收网回家");
                break;
        }
    }
}

//抽象对象
class Weather {
    observers = [];
    //增加观察者方法
    add(observer) {
        this.observers.push(observer);
    }
    //删除观察者方法
    remove(observer) {
        var index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    //通知观察者方法
    notifyObserver() {

    }
}

class WeatherReporter extends Weather {
    //通知观察者方法
    notifyObserver(weatherType) {
        this.observers.forEach(element => {
            element.response(weatherType);
        });
    }
}

let farmerObserver = new FarmerObserver();
let fishermenObserver = new FishermenObserver();

let weatherReporter = new WeatherReporter();

weatherReporter.add(farmerObserver);
weatherReporter.add(fishermenObserver);



weatherReporter.notifyObserver("rainy");
console.log("=================================================================1");
weatherReporter.notifyObserver("high wind");
console.log("=================================================================2");
weatherReporter.remove(farmerObserver);

console.log("=================================================================3");

weatherReporter.notifyObserver("rainy");
console.log("=================================================================4");
weatherReporter.notifyObserver("high wind");

console.log("=================================================================5");
weatherReporter.remove(fishermenObserver);
console.log("=================================================================6");
weatherReporter.notifyObserver("rainy");
console.log("=================================================================7");
weatherReporter.notifyObserver("high wind");