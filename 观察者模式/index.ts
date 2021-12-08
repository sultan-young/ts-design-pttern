/**
 * 有如下场景，三个人组队打boss，boss死亡了，
 * 这三个玩家应该完全知道boss的死亡信息
 * 这里可以使用观察者模式
 * 三个玩家都观察boss的死亡情况
 */

interface IObserver {
    bossDead();
}

class Boss {
    private _hp:number = 10;
    public observers: Array<IObserver> = new Array<IObserver>();
    public get hp() {
        return this._hp;
    }
    public set hp(value) {
        if(value === 0) {
            this.observers.forEach((observer)=> {
                observer.bossDead();
            })
        }
        this._hp = value;
    }
}

class User implements IObserver {
    private name:string;
    constructor(name: string) {
        this.name = name;
    }
    bossDead() {
        console.log(this.name + '知道boss死了')
    }
}

const user1 = new User('用户1');
const user2 = new User('用户2');
const user3 = new User('用户3');
let boss = new Boss();
boss.observers.push(user1, user2, user3)

setTimeout(() => {
    boss.hp = 0;
}, 1000);