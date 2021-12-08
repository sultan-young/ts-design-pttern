// 实现一个功能，当入参是数字时候返回+1后的值，当为字符串时候直接返回
// 当不使用泛型实现
function add(num) {
    if (typeof num === 'number') {
        num++;
        return num;
    }
    return num;
}
// 使用泛型
// 泛型可以在预先不知道入参类型的情况下返回同样的类型
function add1(num) {
    if (typeof num === 'number') {
        num++;
        return num;
    }
    return num;
}
