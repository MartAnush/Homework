1. // Given an object. Invert it (keys become values and values become keys). If there is
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