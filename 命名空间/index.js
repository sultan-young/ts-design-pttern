var p;
(function (p) {
    // 想要在命名空间外使用需要被导出
    var Person = /** @class */ (function () {
        function Person() {
        }
        return Person;
    }());
    p.Person = Person;
})(p || (p = {}));
console.log(p.Person);
