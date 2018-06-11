// function booWho(bool) {
//   // What is the new fad diet for ghost developers? The Boolean.
//   if (bool === true || bool === false){
//   	return true;
//   }
//   return false;
// }




// source : freecodecamp

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool === 'boolean';
}

console.log(booWho(0));