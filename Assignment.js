var newArr = new Array(5);

for (i = 0; i < 5; i++) {
  newArr[i] = new Array(5);
}

newArr[0][0] = 21;
newArr[0][1] = 22;
newArr[0][2] = 23;
newArr[1][0] = 24;
newArr[1][1] = 25;
newArr[1][2] = 26;
newArr[2][0] = 27;
newArr[2][1] = 28;
newArr[2][2] = 29;
newArr[3][0] = 30;
newArr[3][1] = 31;
newArr[3][2] = 32;
newArr[4][0] = 33;
newArr[4][1] = 34;
newArr[4][2] = 35;

console.log("newArr = ", newArr);

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 3; j++) {
    document.write(newArr[i][j] + "&emsp;");
  }
  document.write("<br/>")
}