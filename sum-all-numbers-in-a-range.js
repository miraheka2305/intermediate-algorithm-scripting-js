
function sumAll(arr) {
  var minNum = Math.min.apply(null, arr);
  var maxNum = Math.max.apply(null,arr);

  var count = 0;
  for (var i = minNum; i<=maxNum; i++){
  	count+=i;
  }
  return count;
}

console.log(sumAll([1, 4]));

// arr= [1,4];
// var minNum = Math.min.apply(null, arr);
// var maxNum = Math.max.apply(null,arr);
//   console.log(minNum);
//   console.log(maxNum);