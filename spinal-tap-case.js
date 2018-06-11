
// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins
//   var arrNew = [];
//   if (str[0] == str[0].toUpperCase()){

//   	arrNew.push(str[0].toLowerCase());
//   } else{
//   	arrNew.push(str[0]);	
//   }
  
//  	for (var i=1;i<str.length;i++){
//  		if (str[i]== ' ' || str[i] == str[i].toUpperCase() || str[i] == '_'){
//  			arrNew.push('-');
//  			arrNew.push(str[i].toLowerCase());
//  		} else{
//  			arrNew.push(str[i]);
//  		}

//  	}
//   return arrNew.join('');

// }

// console.log(spinalCase('This Is Spinal Tap'));


// function hasWhiteSpace(s)
// {


//      reWhiteSpace = new RegExp(/^\s+$/);

//      console.log(reWhiteSpace);
//      // Check for white space
//      if (reWhiteSpace.test(s)) {
//           alert("Please Check Your Fields For Spaces");
//           return false;
//      }
// return true;
// }


// console.log(hasWhiteSpace('aaaaaaabbbbb'));
// userText = 'ndndndn ddd aasdf';
// userText = userText.replace(/^\s+/, '').replace(/\s+$/, '');
// if (userText === ' ') {
//     // text was all whitespace
//     console.log('ada spasi');
// } else {
//     // text has real content, now free of leading/trailing whitespace
//     console.log('tidak');
// }


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  var regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return str.replace(regex,'-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
