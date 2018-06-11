
function fearNotLetter(str) {
	// var strNew = [];
	// var strSplit = str.split('');
	// var gap = 0;
	for (var i = 0; i<str.length;i++){
		var code = str.charCodeAt(i);
		console.log(code);
		if (code !== str.charCodeAt(0)+i){
			return String.fromCharCode(code-1);
		} 
	}
	return undefined;
		// if ((parseInt(strSplit[i].charCodeAt(0))+1) !== strSplit[i+1].charCodeAt(0)){
		// 		gap = strSplit[i+1].charCodeAt - strSplit[i].charCodeAt(0);
		// 		for (var j = 1;j<=gap;j++){
		// 			var strPush = String. fromCharCode(strSplit[i].charCodeAt(0)+j);
		// 			strNew.push(strPush);
		// 		}	
		// 	} else {
		// 		strNew.push(strSplit[i]);
		// 	}

		// }
		// return strNew;
}



console.log(fearNotLetter("abcf"));


// console.log('a'.charCodeAt(0)+1);


//source : freecodecamp