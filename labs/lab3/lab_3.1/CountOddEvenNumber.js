function countOddEvenNumbers(intArr){
    let evenCount = 0;
    let oddCount = 0;

    for(let i=0; i < intArr.length; i++){
        if(intArr[i] % 2 === 0){
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return {
        evenCount: evenCount,
        oddCount: oddCount
    };
}

module.exports = {
    countOddEvenNumbers: countOddEvenNumbers
}