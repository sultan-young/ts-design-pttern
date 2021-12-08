// 假如在一块策略游戏中，我们需要让我们的佣兵去杀怪获取资源，这时候每个佣兵都有不同的属性
// 例如幸运值，攻击力。同一项任务可能不同佣兵执行会有不同的效果。
// 作为指挥者的我们，是不需要去自己杀怪，只需要合理分配佣兵去做，这时候就用到了代理模式
// 佣兵们代理了我们的任务指令
// 定义一个怪物类
var Monster1 = /** @class */ (function () {
    function Monster1(hp) {
        this.hp = hp;
    }
    Monster1.prototype.hurt = function (attack) {
        this.hp = this.hp - attack;
        return this.hp;
    };
    return Monster1;
}());
var Npc1 = /** @class */ (function () {
    function Npc1() {
        // 攻击力为1
        this.attack = 1;
        this.name = 'npc1';
    }
    Npc1.prototype.kill = function (monster) {
        var monsterHp = monster.hurt(this.attack);
        console.log(this.name + '打完怪之后怪物还剩' + monsterHp + '的血量');
    };
    return Npc1;
}());
var Npc2 = /** @class */ (function () {
    function Npc2() {
        // 攻击力为2
        this.attack = 2;
        this.name = 'npc2';
    }
    Npc2.prototype.kill = function (monster) {
        var monsterHp = monster.hurt(this.attack);
        console.log(this.name + '打完怪之后怪物还剩' + monsterHp + '的血量');
    };
    return Npc2;
}());
var Npc3 = /** @class */ (function () {
    function Npc3() {
        // 攻击力为1
        this.attack = 3;
        this.name = 'npc3';
    }
    Npc3.prototype.kill = function (monster) {
        var monsterHp = monster.hurt(this.attack);
        console.log(this.name + '打完怪之后怪物还剩' + monsterHp + '的血量');
    };
    return Npc3;
}());
// 发出指令的类
var Self = /** @class */ (function () {
    function Self() {
    }
    Self.prototype.sendKill = function () {
        this.proxy.kill(new Monster1(3));
    };
    return Self;
}());
var self1 = new Self();
self1.proxy = new Npc1();
self1.sendKill();
self1.proxy = new Npc2();
self1.sendKill();
self1.proxy = new Npc3();
self1.sendKill();
