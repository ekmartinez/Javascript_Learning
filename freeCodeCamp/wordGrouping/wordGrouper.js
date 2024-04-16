function grouper(arr, size) {

    let newArray = [];
    let groups = arr.length / size;

    for (let x = 0; x < groups; x++){
        newArray.push(arr.slice(0, size));
        arr.splice(0, size);
    }

    return newArray;
  }
  
  console.log(grouper([0, 1, 2, 3, 4, 5], 4));