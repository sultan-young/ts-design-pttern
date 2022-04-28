function intersection(...arrays: Array<Array<number>>): Array<number> {
    const result: Array<number> = [];
    if (arrays.length < 2) return result;
    let minLengthArrIndex = 0;
    let minLengthArr = arrays[minLengthArrIndex];
    for (let i = 1; i < arrays.length; i ++) {
        if (arrays[i].length < minLengthArr.length) {
            minLengthArrIndex = i;
            minLengthArr = arrays[i];
        }
    };
    arrays.splice(minLengthArrIndex, 1);
    const othArray = arrays;
    for (let i = 0; i < minLengthArr.length; i++) {
        const isEventHas = othArray.every(array => array.includes(minLengthArr[i]));
        if(isEventHas) {
            result.push(minLengthArr[i]);
        }
    }
    return result;
}

console.log(intersection([5],[1,2,3,4,5],[3,5]))