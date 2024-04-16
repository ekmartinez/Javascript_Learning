function filteredArray(arr, elem) {
    let newArr = [];
    
    for (let x = 0; x < arr.length; x++) {
        if (arr[x].indexOf(elem) == -1) {
            newArr.push(arr[x]);
        }
    }
  
    return newArr;
  }

  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
