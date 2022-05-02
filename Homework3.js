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


4. Given the list of the following readers:
[
{ book: &quot;Catcher in the Rye&quot;, readStatus: true, percent: 40},
{ book: &quot;Animal Farm&quot;, readStatus: true, percent: 20},
{ book: &quot;Solaris&quot;, readStatus: false, percent: 90 },
{ book: &quot;The Fall&quot;, readStatus: true, percent: 50 },
{ book: &quot;White Nights&quot;, readStatus: false, percent: 60 } ,
{ book: &quot;After Dark&quot;, readStatus: true, percent: 70 }
];
Output the books sorted by the percent in descending order which readStatus is true.


function sortFilter(arr){
	
  let sortedArr = arr.sort(function (a, b) {
    return b.percent - a.percent;
  });

  let filteredArr = sortedArr.filter(function(element){
    if (element.readStatus == true ) {
    return true
    }
  })
  return filteredArr
}
