
function whatIsInAName(collection, source) {
  // What's in a name?
  // var arr = [];
  // Only change code below this line
  
  var srcObj = Object.keys(source);

  return collection.filter(function(obj){
  	for (var i=0;i<srcObj.length;i++){
  		if (!obj.hasOwnProperty(srcObj[i])||obj[srcObj[i]]!==source[srcObj[i]]){
  			return false;
  		}

  	}	
  	  		return true;
  });
  
  // Only change code above this line
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));



//source : freecodecamp