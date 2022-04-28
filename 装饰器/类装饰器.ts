// 类装饰器可以对某个类赋予一个通用的能力
const classDecorator: ClassDecorator = (a) => {
    a.prototype.eat = () => {
        console.log('被赋予了吃饭的技能')
    }
}

@classDecorator
class Dog{
    eat() {
        
    }
}

new Dog().eat();