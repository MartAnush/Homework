function checkOdd(arr){
    if(arr.length == 1){
     return checkOdd[0] % 2 !== 0
    }
    
    else if(checkOdd[0] % 2 !== 0){
       return checkOdd(arr.slice(1))
    }
    
    else {
      return false
      }
    
  }
  