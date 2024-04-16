function fearNotLetter(str) {

    let abc = "abcdefghijklmnopqrstuvwxyz";
    abc = abc.slice(abc.indexOf(str[0]),);

    for (let x = 0; x < str.length; x++) {
        if (str[x] != abc[x]) {
            return abc[x];
        }
    }
    return;
}
  
  console.log(fearNotLetter("stvwx"));