const showDecorator: MethodDecorator = (...args) => {
    console.log(args)
}

class Cat {
    // 方法装饰器可以对某个方法进行拦截，进行统一的某个行为之后再执行原方法
    @showDecorator
    public show () {

    }
}



