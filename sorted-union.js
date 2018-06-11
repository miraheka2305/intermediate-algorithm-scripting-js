 
function uniteUnique(arr) {
		// var args = Array.from(arguments);
	var arrNew = [];
	console.log(arguments);
	for (var i=0; i<arguments.length;i++){
		 var arrayArguments = arguments[i];
		 for (var j=0; j<arrayArguments.length;j++){
		 	var value = arrayArguments[j];


		 	if (arrNew.indexOf(value)<0){
		 		arrNew.push(value);
		 	}
		 }
	}
	return arrNew;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));