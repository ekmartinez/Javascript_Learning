function factorialize(num) {
    let product = 1;
    let range = [...Array(num+1).keys()].slice(1);

    for (let x = 0; x < range.length; x++){
        product *= range[x];
    }
    return product;
  }
  
  console.log(factorialize(5));