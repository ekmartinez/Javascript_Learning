function frankenSplice(arr1, arr2, n) {

    let newArray = arr2.slice(arr2);
    newArray.splice(n, 0, ...arr1)
    
    return newArray;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));