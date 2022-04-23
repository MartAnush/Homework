let arr = [1,2,4,8,5,0,10]

function isSorted(a) {
	for(let i = 0; i < a.length; i++ ){
        if (a[i] < a[i-1]){
        return i
        } 
    }
  return '-1'
}