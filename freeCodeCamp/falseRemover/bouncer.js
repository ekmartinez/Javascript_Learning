function bouncer(arr) {
    for (let x = 0; x < arr.length; x++) {
        if (!!arr[x] === false) {
            arr.splice(x);
        }
    }
    return arr;
  }
  
console.log(bouncer([7, "ate", "", false, 9]));
