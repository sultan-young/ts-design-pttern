// function intersection(...arrays: Array<Array<number>>): Array<number> {
//     const result: Array<number> = [];
//     if (arrays.length < 2) return result;
//     let minLengthArrIndex = getArrayMinLengthIndex(arrays);
//     const { minLengthArray, othArrays} = splitArrayWithMinIndex(arrays, minLengthArrIndex);
//     for (let i = 0; i < minLengthArray.length; i++) {
//         const isEventHas = othArrays.every(array => array.includes(minLengthArray[i]));
//         if(isEventHas) {
//             result.push(minLengthArray[i]);
//         }
//     }
//     return result;
// }
// console.log(intersection([5],[1,2,3,4,5],[3,5]))
function getArrayMinLengthIndex(arrays) {
    var minLengthArrIndex = 0;
    var minLengthArr = arrays[minLengthArrIndex];
    for (var i = 1; i < arrays.length; i++) {
        if (arrays[i].length < minLengthArr.length) {
            minLengthArrIndex = i;
            minLengthArr = arrays[i];
        }
    }
    ;
    return minLengthArrIndex;
}
function splitArrayWithMinIndex(arrays, minIndex) {
    return {
        minLengthArray: arrays[minIndex],
        othArrays: arrays.filter(function (_, index) { return index !== minIndex; })
    };
}
function intersectionByKey() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var result = [];
    var arrays = arg.slice(0, arg.length - 1);
    if (arrays.length < 2)
        return result;
    var key = arg[arg.length - 1];
    var minLengthArrIndex = getArrayMinLengthIndex(arrays);
    var _a = splitArrayWithMinIndex(arrays, minLengthArrIndex), minLengthArray = _a.minLengthArray, othArrays = _a.othArrays;
    var _loop_1 = function (i) {
        var comparator = function (array) { return array.find(function (item) { return item[key] === minLengthArray[i][key]; }); };
        console.log(minLengthArray[i][key]);
        var isEqual = othArrays.every(comparator);
        if (isEqual) {
            result.push(minLengthArray[i]);
        }
    };
    for (var i = 0; i < minLengthArray.length; i++) {
        _loop_1(i);
    }
    return result;
}
var result = intersectionByKey([{ x: 1, y: 3 }, { x: 5, y: 5 }], [{ x: 1, y: 5 }, { x: 3, y: 1 }, { x: 5, y: 1 }, { x: 3, y: 5 }], [{ x: 1, y: 7 }, { x: 3, y: 3 }], [{ x: 3, y: 5 }, { x: 5 }], 'x');
console.log(result);
