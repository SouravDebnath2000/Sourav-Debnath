var annon = function (array) {
  var larger = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > larger) {
      larger = array[i];
    }
  }
  return `${larger}`;
};
console.log(annon([10000, 2, 504, -3, 2005]));
