function sumArray(array) {
  var i = 0;
  for (var sum = 0; sum < array.length; sum++) {
    i += array[sum];
  }
  return i;
}
console.log(sumArray([1, 2, 3, 4, 5]));
