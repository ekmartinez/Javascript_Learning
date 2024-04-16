# Word Grouping 

Splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

grouper(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

grouper([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

grouper([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

grouper([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

grouper([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].

grouper([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

grouper([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

Source: Basic Algorithm Scripting (Freecodecamp.com)s