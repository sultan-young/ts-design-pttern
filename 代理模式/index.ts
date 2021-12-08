 // 假如在一块策略游戏中，我们需要让我们的佣兵去杀怪获取资源，这时候每个佣兵都有不同的属性
 // 例如幸运值，攻击力。同一项任务可能不同佣兵执行会有不同的效果。
 // 作为指挥者的我们，是不需要去自己杀怪，只需要合理分配佣兵去做，这时候就用到了代理模式
 // 佣兵们代理了我们的任务指令


 // 定义一个怪物类
 class Monster1 {
    protected hp:number;
    constructor(hp:number) {
        this.hp = hp;
    }
    hurt(attack) {
        this.hp = this.hp - attack;
        return this.hp;
    }
 }

 interface IKillMonster {
     kill(monster: Monster1): void;
 }


class Npc1 implements IKillMonster {
    // 攻击力为1
    private attack:number = 1;
    private name: string = 'npc1';
     kill(monster: Monster1) {
        const monsterHp = monster.hurt(this.attack);
        console.log(this.name + '打完怪之后怪物还剩' + monsterHp + '的血量')
     }
 }

 class Npc2 implements IKillMonster {
    // 攻击力为2
    private attack:number = 2;
    private name: string = 'npc2';
     kill(monster: Monster1) {
        const monsterHp = monster.hurt(this.attack);
        console.log(this.name + '打完怪之后怪物还剩' + monsterHp + '的血量')
     }
 }

 class Npc3 implements IKillMonster {
    // 攻击力为1
    private attack:number = 3;
    private name: string = 'npc3';
     kill(monster: Monster1) {
        const monsterHp = monster.hurt(this.attack);
        console.log(this.name + '打完怪之后怪物还剩' + monsterHp + '的血量')
     }
 }
 
 // 发出指令的类
 class Self {
     // 设置当前代理人
     public proxy;
     sendKill() {
        this.proxy.kill(new Monster1(3))
     }
 }

 const self1 = new Self();
 self1.proxy = new Npc1();
 self1.sendKill();
 self1.proxy = new Npc2();
 self1.sendKill();
 self1.proxy = new Npc3();
 self1.sendKill();