 // 1. Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value create an array.

let obj = {
    a: "1",
    b: "2",
    c: "1",
    d: "1"    
    }
    
    let newObj = {}
    for (let key in obj){
        if (newObj[obj[key]]) {
            if (!Array.isArray(newObj[obj[key]])) {
                let nestedNewObj = newObj[obj[key]];
                newObj[obj[key]] =[];
                newObj[obj[key]].push(nestedNewObj)
            }
            newObj[obj[key]].push(key)
            
        }else {
            
            newObj[obj[key]] = key
        }
    }



//2. Given two objects. Write a function that performs shallow compare.

function shallowCompare(a,b) {
	if (Object.keys(a).length !== Object.keys(b).length || Object.keys(a).length === 0){
    return false
	} 

  for (let key in a) {
    if(a[key] !== b[key]){
      return  false
    }
   return true
  }
}


//3. Given an array. Determine whether it consists only from uniques or not.


function duplicateCheck(a){
  let arr2 = []
  for (let i = 0; i < a.length; i++) {
  arr2.push(a[i]);
  	for (let j = 0; j < arr2.length; j++){
		if (a[i] == arr2[j-1]) {
			return 'has duplicate'}    
              	}
    } return 'does not have duplicate'
}
