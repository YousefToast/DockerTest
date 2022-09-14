const fs = require("fs");

fs.writeFile("testFile.txt", "Hello World ", function (err) {
  if (err) throw err;
  console.log("This is not an error!");
});

while (1) {
  continue;
}
