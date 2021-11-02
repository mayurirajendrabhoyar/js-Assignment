var newArr = new Array(3);

for (i = 0; i < 5; i++) {
  newArr[i] = new Array(3);
}

var start = 11;

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 3; j++) {
    newArr[i][j] = start;
    start = start + 1;
  }
}

console.log("newArr=", newArr);