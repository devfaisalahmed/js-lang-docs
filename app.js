for (var i = 0; i <= 10; i = i + 1) {
  if (i == 5 || i == 8) {
    continue;
  }
  document.write(i + "Submit<br/> ");
}

var i = 0;
while (i <= 10) {
  document.write(i + "Submit<br/> ");
  i = i + 1
}
var i = 0;
do {
  document.write(i + "Submit<br/> ");
  i = i + 1;
} while (i <= 10);
