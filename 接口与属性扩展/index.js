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
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = '';
    }
    return Person1;
}());
var WolfMan = /** @class */ (function (_super) {
    __extends(WolfMan, _super);
    function WolfMan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WolfMan.prototype.eatPerson = function () {
    };
    WolfMan.prototype.fly = function () {
    };
    return WolfMan;
}(Person1));
var wolfMan = new WolfMan();
wolfMan.eatPerson();
