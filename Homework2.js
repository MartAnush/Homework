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

function sumOfArrays(array){
 result = array.map(toSum)
 return result
}

function toSum(a) {
let sum = 0
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



4. Given a number. Write a function that calculates its sum of the digits and if that sum
has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
return the result.

let number = 559

function sumOfArrays(a) {

let arr = Array.from(String(a), Number)

let sum = 0
  for (let i = 0; i< arr.length; i++) {
    sum += arr[i]
  }
  
  if (sum > 9) {
    return sumOfArrays (sum)
  }
  
return sum
}



5. Write a recursive function which receives  a number as arguments and returns the
fibonacci sequence as array.

function fibNumber(a) {

let digit1 = 0
let digit2 = 1
let arr = [1]

for(let i = 1; i < a; i++ ) {
  
	let sum = digit1 + digit2
	digit1 = digit2 
	digit2 = sum 
	arr.push(sum)
}

return arr

}
