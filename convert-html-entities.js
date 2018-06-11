
function convertHTML(str) {
  // &colon;&rpar;

  var strSplit = str.split('');
  for (var i=0;i<strSplit.length;i++){
  	switch(strSplit[i]){
  		case '&':
  			strSplit[i] = '&amp;';
  			break;
  		case '<' :
  			strSplit[i] = '&lt;';
  			break;
  		case '>' :
  			strSplit[i] = '&gt;';
  			break;
		case '"' :
  			strSplit[i] = '&quot;';
  			break;
  		case "'" :
  			strSplit[i] = '&apos;';
  			break;
  	}
  }
  strSplit = strSplit.join('');
  return strSplit;
}

console.log(convertHTML("Dolce & Gabbana"));