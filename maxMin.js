function maxMinValue(inputArr) {
  let max = Number.MIN_SAFE_INTEGER; //alternatively we can use minimum value like -9007199254740991
  let min = Number.MAX_SAFE_INTEGER; //alternatively we can use maximum value like 9007199254740991

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] > max) max = inputArr[i];
    if (inputArr[i] < min) min = inputArr[i];
  }

  return {
    maxNumber: max,
    minNumber: min,
  };
}

// sample input
var data = [10, 1000, 1, 59.1, 120, 4, -1, 30, -233443, 0.2334];

console.log(maxMinValue(data));
