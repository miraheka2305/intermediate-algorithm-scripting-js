
function myReplace(str, before, after) {
	if (before[0] === before[0].toUpperCase()){
		after = after.replace(/\b\w/g, l => l.toUpperCase());
	}
	var re = new RegExp(before,"g");
	var newStr = str.replace(re,after);
  return newStr;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

