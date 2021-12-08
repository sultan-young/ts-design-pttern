// 一个声音管理系统，需要在多方调用时候，返回同一个系统实例
class SoundSystem {
    private static _system: SoundSystem;
    public static get system () {
        if (!SoundSystem._system) {
            SoundSystem._system = new SoundSystem(); 
        }
        return SoundSystem._system;
    }

    
}

console.log(SoundSystem.system)