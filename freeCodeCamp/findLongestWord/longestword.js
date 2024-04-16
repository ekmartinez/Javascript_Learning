function findLongestWordLength(str) {
    let tempList = [];
    let lstSplit = str.split(" ");

    for (let x = 0; x < lstSplit.length; x++) {
        tempList.push(lstSplit[x].length);
    }

    return Math.max(...tempList);
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));