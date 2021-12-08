enum CarType {
    Bmw,
    Aodi,
    Benz,
}

class Car {
    name: string;
    static Create(carType: CarType): Car {
        let car:Car;
        switch (carType) {
            case CarType.Bmw:
                car = new Bmw();
                break;
            case CarType.Aodi:
                car = new Aodi();
                break;
            case CarType.Benz:
                    car = new Benz();
                    break;
            default:
                break;
        }
        return car;
    }
}

class Bmw extends Car {

}

class Aodi extends Car {

}

class Benz extends Car {

}

let bew = Car.Create(CarType.Bmw)
console.log(bew)