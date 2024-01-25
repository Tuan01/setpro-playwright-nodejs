function sortArray(intArr) {
  for (let i = 0; i < intArr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < intArr.length; j++) {
      if (intArr[j] < intArr[minIndex]) {
        minIndex = j;
      }
    }
    const temp = intArr[i];
    intArr[i] = intArr[minIndex];
    intArr[minIndex] = temp;
  }
}

module.exports = {
  sortArray: sortArray
};