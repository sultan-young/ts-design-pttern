/**
 * 有如下场景，三个人组队打boss，boss死亡了，
 * 这三个玩家应该完全知道boss的死亡信息
 * 这里可以使用观察者模式
 * 三个玩家都观察boss的死亡情况
 */
var Boss = /** @class */ (function () {
    function Boss() {
        this._hp = 10;
        this.observers = new Array();
    }
    Object.defineProperty(Boss.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (value) {
            if (value === 0) {
                this.observers.forEach(function (observer) {
                    observer.bossDead();
                });
            }
            this._hp = value;
        },
        enumerable: false,
        configurable: true
    });
    return Boss;
}());
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.bossDead = function () {
        console.log(this.name + '知道boss死了');
    };
    return User;
}());
var user1 = new User('用户1');
var user2 = new User('用户2');
var user3 = new User('用户3');
var boss = new Boss();
boss.observers.push(user1, user2, user3);
setTimeout(function () {
    boss.hp = 0;
}, 1000);
