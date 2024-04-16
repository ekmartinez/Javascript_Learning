function reverseString(str) {
    let reversed = "";
    let tempList = str.split("");

    for (x = tempList.length - 1; x >= 0; x--){
        reversed += tempList[x];
    }

    return reversed; 
    
  }
  
  console.log(reverseString("hello"));