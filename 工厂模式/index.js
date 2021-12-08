var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CarType;
(function (CarType) {
    CarType[CarType["Bmw"] = 0] = "Bmw";
    CarType[CarType["Aodi"] = 1] = "Aodi";
    CarType[CarType["Benz"] = 2] = "Benz";
})(CarType || (CarType = {}));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.Create = function (carType) {
        var car;
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
    };
    return Car;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bmw;
}(Car));
var Aodi = /** @class */ (function (_super) {
    __extends(Aodi, _super);
    function Aodi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Aodi;
}(Car));
var Benz = /** @class */ (function (_super) {
    __extends(Benz, _super);
    function Benz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Benz;
}(Car));
var bew = Car.Create(CarType.Bmw);
console.log(bew);
