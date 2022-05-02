// 1. Given an array. Write a recursive function that removes the first element and returns the given
// array. (without using arr.unshift(),assign second element to first, third element to second...)

function removeFirst(arr){
    arr.splice(0,1)
    return arr
    
}