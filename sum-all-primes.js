
// function sumPrimes(num) {
// 	var sum = 0;
// 	function checkPrime(i){
//   		for (var k = 2; k<i; k++){
//   			if (i%k === 0 & i!==k){
//   				return false;
//   			}
//   		}	
//   		return true;	
//   	};
//   	for (var i=2; i<=num;i++){
//   		if (checkPrime(i)){
//   			sum += i;
//   		}
//   	}

//   return sum

// }

// console.log(sumPrimes(10));

// // source : https://medium.com/@hugh.winchester/sum-all-primes-3e31589fdf6c

function sumPrimes(num){
	var sum = 0;
	function checkPrime(i){
  		for (var k = 2; k<i; k++){
  			if (i%k === 0 & i!==k){
  				return false;
  			}
  		}	
  		return true;	
  	};

  	if (num === 1){
  		return 0;
  	}
  	if (checkPrime(num) === false){
  		return sumPrimes(num -1);
  	}
  	if(checkPrime(num) === true){
  		return num + sumPrimes(num-1);
  	}
}

console.log(sumPrimes(10));

//source : freecodecamp