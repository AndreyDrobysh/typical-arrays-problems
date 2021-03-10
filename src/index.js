
exports.min = function min (arr) {
  if (arr == "" || !arr) {
    return 0;
  }
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}


exports.max = function max (arr) {
  if (arr == "" || !arr) {
  return 0;
}
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
return max;
}

exports.avg = function avg (arr) {
  if (arr == "" || !arr) {
  return 0;
}
let main = 0;
let avg = 0;
for (let i = 0; i < arr.length; i++) {
  avg += arr[i]
}
main = avg / arr.length;
return main;

}
