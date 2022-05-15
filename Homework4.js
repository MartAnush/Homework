3.   Write a recursive function to determine whether all digits of the number are odd or not.

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

4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․

function minPos(arr) {
    let sortedArr = arr.sort(function(a, b) {
      return a - b;
    });
    if(arr.length == 1 && arr[0] < 0){
      return -1
     }
    
    if(arr[0] < 0){
    return minPos(arr.slice(1))
    } else {
    return arr[0]
    }
}
  
