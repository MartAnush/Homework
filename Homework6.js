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
    
