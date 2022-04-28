var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// target 是类的原型，即为 Mouse.prototype
// propertyName 是属性的key
function definePropertyDecorator(target, propertyName) {
    // new target.constructor() 可以获取到属性的初始值
    // ERROR: 这里不正确！！！Object.defineProperty在类的原型上添加了一个新的属性，这个属性和propertyName同名，并不能达到给instance添加get set的目的
    // TIPS: 属性描述符不会做为参数传入属性装饰器，这与TypeScript是如何初始化属性装饰器的有关。 因为目前没有办法在定义一个原型对象的成员时描述一个实例属性，并且没办法监视或修改一个属性的初始化方法。返回值也会被忽略。因此，属性描述符只能用来监视类中是否声明了某个名字的属性。
    var name = null;
    Object.defineProperty(target, propertyName, {
        get: function () {
            console.log('getter触发');
            return name;
        },
        set: function (value) {
            console.log('setter触发');
            name = value;
        }
    });
}
function readonlyDecorator(target, propertyName) {
    Object.defineProperty(target, propertyName, {
        writable: false,
    });
}
var Mouse = /** @class */ (function () {
    function Mouse() {
        this.name = '小龙';
        this.age = 24;
    }
    __decorate([
        definePropertyDecorator
    ], Mouse.prototype, "name", void 0);
    __decorate([
        readonlyDecorator
    ], Mouse.prototype, "age", void 0);
    return Mouse;
}());
var mouse = new Mouse();
console.log(mouse.name);
mouse.name = '小杨';
mouse.age = 10;
console.log(mouse.age);
var mouse1 = new Mouse();
console.log(mouse1.name, 'mouse1');
