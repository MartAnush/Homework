 1. Given an array. Write a recursive function that removes the first element and returns the given
 array. (without using arr.unshift(),assign second element to first, third element to second...)

function removeFirst(arr){
    arr.splice(0,1)
    return arr
    
}


2.Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function
that concats arrays).

let arr = []

function  flatten (a) {
	for (let i =0; i<a.length; i++) {
        if (Array.isArray(a[i])) {
            flatten(a[i]);
        } else {
            arr.push(a[i]);
        }
	} 
    return arr;
}
