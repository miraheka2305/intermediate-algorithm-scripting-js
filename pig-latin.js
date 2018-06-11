
function translatePigLatin(str) {
	function isVowel(str,i){
		if (str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o' || str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E' || str[i] === 'O'){
			return true;
		} else {
			return false;
		}
	}
	// var checkVowel = false;
	var i = 0;
	var newLet = '';
	if (isVowel(str,i) == true) {
		// checkVowel = true;
		str = str + "way";
	} else {
		var strSplit = str.split('');
			while (isVowel(str,i) == false){
				newLet = strSplit.shift();
				strSplit.push(newLet);
				i ++;
			}
		strJoin = strSplit.join('');
		str = strJoin + "ay";			
	}	
  return str;
}

console.log(translatePigLatin("glove"));

