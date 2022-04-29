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

function getArrayMinLengthIndex(arrays: Array<Array<any>>) {
    let minLengthArrIndex = 0;
    let minLengthArr = arrays[minLengthArrIndex];
    for (let i = 1; i < arrays.length; i ++) {
        if (arrays[i].length < minLengthArr.length) {
            minLengthArrIndex = i;
            minLengthArr = arrays[i];
        }
    };
    return minLengthArrIndex;
}

function splitArrayWithMinIndex<T>(arrays: Array<T>, minIndex): {minLengthArray: T, othArrays: Array<T>} {
    return {
        minLengthArray: arrays[minIndex],
        othArrays: arrays.filter((_, index) => index !== minIndex)
    }
}

function intersectionByKey(...arg) {
    const result = [];
    const arrays = arg.slice(0, arg.length - 1);
    if (arrays.length < 2) return result;
    const key = arg[arg.length - 1];
    const minLengthArrIndex = getArrayMinLengthIndex(arrays);
    const { minLengthArray, othArrays } = splitArrayWithMinIndex(arrays, minLengthArrIndex);
    for(let i = 0; i < minLengthArray.length; i++) {
        const comparator = (array) => array.find(item => item[key] === minLengthArray[i][key]);
        console.log(minLengthArray[i][key])
        const isEqual = othArrays.every(comparator);
        if (isEqual) {
            result.push(minLengthArray[i])
        }
    }
    return result;
}

const result = intersectionByKey(
    [{x: 1, y: 3}, {x: 5, y: 5}],
    [{x: 1, y: 5}, {x: 3, y: 1}, {x: 5, y: 1}, {x: 3, y: 5}],
    [{x: 1, y: 7}, {x: 3, y: 3}], 
    [{x: 3, y: 5}, {x: 5}], 
    'x');
console.log(result)