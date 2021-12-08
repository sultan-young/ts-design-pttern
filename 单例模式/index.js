// 一个声音管理系统，需要在多方调用时候，返回同一个系统实例
var SoundSystem = /** @class */ (function () {
    function SoundSystem() {
    }
    Object.defineProperty(SoundSystem, "system", {
        get: function () {
            if (!SoundSystem._system) {
                SoundSystem._system = new SoundSystem();
            }
            return SoundSystem._system;
        },
        enumerable: false,
        configurable: true
    });
    return SoundSystem;
}());
console.log(SoundSystem.system);
