function findMinMax(intArr){
    let min = intArr[0];
    let max = intArr[0];

    for(let i = 0; i < intArr.length; i++){
        if(intArr[i] > max){
            max = intArr[i];
        }
        if(intArr[i] < min){
            min = intArr[i];
        }
    }
    return {
        min: min,
        max: max
    };
}

module.exports = {
    findMinMax: findMinMax
}