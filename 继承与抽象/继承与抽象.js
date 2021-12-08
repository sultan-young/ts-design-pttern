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
// 继承
var Person = /** @class */ (function () {
    function Person() {
        this.name = '';
    }
    Person.prototype.say = function () {
        console.log('我是person，叫做' + this.name);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.say = function () {
        // 可以调用父类方法
        _super.prototype.say.call(this);
        console.log('我是学生，叫做' + this.name);
    };
    return Student;
}(Person));
var student = new Student();
student.name = '小明';
student.say();
// 抽象类, 本身不能被实例化，但可以被继承
// 抽象类也可以有具体方法
var Monster = /** @class */ (function () {
    function Monster() {
        this.name = '';
    }
    Monster.prototype.run = function () {
        console.log(this.name + '正在跑');
    };
    return Monster;
}());
var Wolf = /** @class */ (function (_super) {
    __extends(Wolf, _super);
    function Wolf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 当继承抽象类时候，必须实现抽象类中的抽象方法
    Wolf.prototype.say = function () {
        console.log('我是狼，我的名字叫' + this.name);
    };
    return Wolf;
}(Monster));
var wolf = new Wolf();
wolf.name = '狼霸天';
wolf.run();
wolf.say();
