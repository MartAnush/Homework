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



function binaryExtract(myArray, value) {
  
  let mid = myArray[Math.floor((myArray.length - 1) / 2)];

if (mid == value) {
	return value;
}

if (myArray.lenght == 1 && myArray[0] != value) {
	return -1;
}
else if (myArray.lenght == 1 && myArray[0] == value) {
	return value;
}

 if (value >= mid ) {
		myArray = myArray.slice(myArray.indexOf(mid) +1)
  return binaryExtract(myArray, value)
} else if(value < mid) {
		myArray = myArray.slice(0, - myArray.indexOf(mid) -1)
 	return binaryExtract(myArray, value)
}
return -1;
}

array =[4,2,55,104,7,9,3,785,34,152,74,68,452]

sortedArray = array.sort(function(a, b){return a - b});

console.log(binaryExtract(sortedArray,4))
