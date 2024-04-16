
function uniteUnique(arr) {
    const set = new Set(Object.values(arguments).flat());
    return [...set];
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
