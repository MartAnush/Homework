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