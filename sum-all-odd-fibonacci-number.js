
// function sumFibs(num) {
// 	var fibonacciNum = [];
// 	fibonacciNum[0] = 0;
// 	fibonacciNum[1] = 1;
// 	var n = 2;
// 	var sumFibonacci = 1;
// 	while (sumFibonacci <= num){
// 		console.log(fibonacciNum [n] = fibonacciNum[n-1] + fibonacciNum [n-2]);
// 		if (fibonacciNum[n]%2 !== 0){
// 			sumFibonacci+=fibonacciNum[n]; 
// 		}
// 		n += 1;
// 	}
//   return sumFibonacci;
// }


function sumFibs(num){
	var start = 0;
	var next = 1;
	var current;
	var sumFibonacci = 0;
	for (var i=0;i<=num;i++){
		current = start + next;
		start = next;
		next = current; 
		if (current%2 !== 0 && current <= num){
			sumFibonacci += current;
		}
	}
	return sumFibonacci + 1;
}

console.log(sumFibs(75024));


// source : https://medium.com/@hugh.winchester/sum-all-odd-fibonacci-numbers-48002954db5f