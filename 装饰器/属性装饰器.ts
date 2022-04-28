// target 是类的原型，即为 Mouse.prototype
// propertyName 是属性的key
function definePropertyDecorator(target, propertyName) {
    // new target.constructor() 可以获取到属性的初始值


    // ERROR: 这里不正确！！！Object.defineProperty在类的原型上添加了一个新的属性，这个属性和propertyName同名，并不能达到给instance添加get set的目的
    // TIPS: 属性描述符不会做为参数传入属性装饰器，这与TypeScript是如何初始化属性装饰器的有关。 因为目前没有办法在定义一个原型对象的成员时描述一个实例属性，并且没办法监视或修改一个属性的初始化方法。返回值也会被忽略。因此，属性描述符只能用来监视类中是否声明了某个名字的属性。

    let name = null;
    Object.defineProperty(target, propertyName, {
        get: () => {
            console.log('getter触发')
            return name;
        },
        set: (value) => {
            console.log('setter触发')
            name = value;
        }
    });

}

function readonlyDecorator(target, propertyName) {
    Object.defineProperty(target, propertyName, {
        writable: false,
    });
}

class Mouse {
    @definePropertyDecorator
    name: string =  '小龙'

    @readonlyDecorator
    age: number = 24;
}
const mouse = new Mouse();
console.log(mouse.name)
mouse.name = '小杨';

mouse.age = 10;
console.log(mouse.age)

const mouse1 = new Mouse()
console.log(mouse1.name, 'mouse1')