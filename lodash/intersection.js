function intersection() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var result = [];
    if (arrays.length < 2)
        return result;
    var minLengthArrIndex = 0;
    var minLengthArr = arrays[minLengthArrIndex];
    for (var i = 1; i < arrays.length; i++) {
        if (arrays[i].length < minLengthArr.length) {
            minLengthArrIndex = i;
            minLengthArr = arrays[i];
        }
    }
    ;
    arrays.splice(minLengthArrIndex, 1);
    var othArray = arrays;
    var _loop_1 = function (i) {
        var isEventHas = othArray.every(function (array) { return array.includes(minLengthArr[i]); });
        if (isEventHas) {
            result.push(minLengthArr[i]);
        }
    };
    for (var i = 0; i < minLengthArr.length; i++) {
        _loop_1(i);
    }
    return result;
}
console.log(intersection([5], [1, 2, 3, 4, 5], [3, 5]));
