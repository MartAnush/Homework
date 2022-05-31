1.Get array of node ids from tree (keys). 

function createArray(obj, result = []){
    for (let key of Object.keys(obj)){
        result.push(+key)
        if(typeof obj[key] === 'object' && obj[key] !== null){
            createArray(obj[key], result)
      } 
    }
  return result
 }
    


3. Implement binary search.

function binaryExtract(array, value) {
  newArray = array.sort(function(a, b){return a - b});
  let mid = newArray[Math.floor((newArray.length - 1) / 2)];

if (mid == value) {
	return value;
}

if (newArray.lenght == 1 && newArray[0] != value) {
	return -1;
}
else if (newArray.lenght == 1 && newArray[0] == value) {
	return value;
}

 if (value >= mid ) {
		newArray = newArray.slice(newArray.indexOf(mid) +1)
  return binaryExtract(newArray, value)
} else if(value < mid) {
		newArray = newArray.slice(0, - newArray.indexOf(mid) -1)
 	return binaryExtract(newArray, value)
}
return -1;
}

