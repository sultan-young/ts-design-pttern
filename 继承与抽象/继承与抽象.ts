// 继承
class Person {
    name: string = '';
    say() {
        console.log('我是person，叫做' + this.name)
    }
}

class Student extends Person {
    say() {
        // 可以调用父类方法
        super.say();
        console.log('我是学生，叫做' + this.name)
    }
}

let student = new Student();
student.name = '小明';
student.say()


// 抽象类, 本身不能被实例化，但可以被继承
// 抽象类也可以有具体方法
abstract class Monster {
    name: string = '';
    run() {
        console.log(this.name + '正在跑')
    }
    abstract say():void;
} 

class Wolf extends Monster {
    // 当继承抽象类时候，必须实现抽象类中的抽象方法
    say() {
        console.log('我是狼，我的名字叫' + this.name);
    }
}

let wolf: Monster = new Wolf()
wolf.name = '狼霸天'
wolf.run()
wolf.say()