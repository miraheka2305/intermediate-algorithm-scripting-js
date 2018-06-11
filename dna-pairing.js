function pairElement(str) {
	var strNew = [];
	var strSplit = str.split('');
	var strPush = [];
	for (var i = 0; i< strSplit.length; i++){
		if (strSplit[i] == "A"){
			strNew[i] = ["A","T"];
		} else if (strSplit[i] == "T"){
			strNew[i] = ["T","A"];
		} else if (strSplit[i] == "G"){
			strNew[i] = ["G","C"];
		} else {
			strNew[i] = ["C", "G"];
		}
		strPush.push(strNew[i]);
	}
  return strPush;
}

console.log(pairElement("GCG"));