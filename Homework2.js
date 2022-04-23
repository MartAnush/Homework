1. Given an array of numbers which is almost sorted in ascending order.  Find the index
where sorting order is violated.

let arr = [1,2,4,8,5,0,10]

function isSorted(a) {
	for(let i = 0; i < a.length; i++ ){
        if (a[i] < a[i-1]){
        return i
        } 
    }
  return '-1'
}


2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
Find sum of each row and print them as an array


let arr = [[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]]

result = arr.map(sumOfArrays)

function sumOfArrays(a) {
sum = 0
  for (let i = 0; i< a.length; i++) {
    sum += a[i]
  }
return sum
}




3. Given an array of integers. Write a function that return new array from first array,
where removed even numbers, and odd numbers was multiplied with new array length

let arr = [5, 4, 78, 0, -3, 7]

oddArr = arr.filter(function(el, i, a) {
	if (el % 2 !== 0)
  return true
})

result = oddArr.map(function(el, i, a) {
  return el * a.length
})
