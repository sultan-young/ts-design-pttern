class Person1 {
    name: string = '';
}

interface IWolf {
    eatPerson():void;
}

interface IGhost {
    fly(): void;
}

class WolfMan extends Person1 implements IWolf, IGhost {
    eatPerson() {

    }
    fly() {
        
    }
}

let wolfMan = new WolfMan();
wolfMan.eatPerson();
