function convertToRoman(num) {
	var result = '';
	var romanNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX","V", "IV","I" ];
	var decimalNum = [1000,900,500,400,100, 90, 50, 40, 10,9,5,4,1];
	for (var i = 0; i <= romanNum.length; i++) {
		while (num%decimalNum[i]<num){
			result+=romanNum[i];
			num-=decimalNum[i];
		}
	}
 	return result;
}

console.log(convertToRoman(2));

// source : https://www.selftaughtjs.com/algorithm-sundays-converting-roman-numerals/