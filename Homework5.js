2.   Write a JavaScript function to get all possible subsets of given length of the given array.
Assume that all elements in the array are unique.


function getAllSubsets(array,n) {
    const subsets = [[]];
    
    for (const el of array) {
        const last = subsets.length-1;
        for (let i = 0; i <= last; i++) {
            subsets.push( [...subsets[i], el] );
        }
    }
    const filtered = subsets.filter(ar => ar.length == n)
    return filtered;
}


1. Create a function that builds a tree.
const treeNodes = [
    {id: 'root', children: [1, 2]},
    {id: 1, children: [3,]},
    {id: 2, children: [4, 5]},
    {id: 3, children: [6]},
    {id: 4, children: [7]},
    {id: 5, children: []},
    {id: 6, children: []},
    {id: 7, children: [8, 9]},
    {id: 8, children: []},
    {id: 9, children: [10]},
    {id: 10, children: []},
]


//Davit jan kisata 


var tree = {}

function createTree(arr){
  for(let i = 0; i< arr.length; i++) {
    if(arr[i].id != undefined && arr[i].id == 'root') {
    	tree[arr[i]] = arr[i].id
    }
      for(let j = 0; j < arr[i].children.length; j++) {
    		if(isExist(arr[i].children[j])){
        tree[arr[i].children[j]] = {}
        }
      }
  }
  return tree   
}

function isExist(id) {
  return treeNodes.some(function(el) {
    return el.id === id;
  }); 
}

