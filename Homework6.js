function createArray(obj, result = []){
    for (let key of Object.keys(obj)){
        result.push(+key)
        if(typeof obj[key] === 'object' && obj[key] !== null){
            createArray(obj[key], result)
      } 
    }
    return result
    }
    