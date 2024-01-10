const fs = require("fs");
const types = require("./2utility");

if (!fs.existsSync("./8FileOrganizer/src")) {
  fs.mkdirSync("./8FileOrganizer/src");
}

// console.log(Object.keys(types));
const fileType = Object.keys(types);
// console.log(types[fileType[0]][0]);
for (let i = 1; i <= 100; i++) {
  let min = 0;
  let max = fileType.length - 1;
  let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;

  let mainType = types[fileType[randomIndex]];
  for (let i = 0; i < mainType.length; i++) {
    let filename = `./8FileOrganizer/src/media${i}.${mainType[i]}`;
    let j = i;
    while (fs.existsSync(filename)) {
      j += 1;
      filename = `./8FileOrganizer/src/media${j}.${mainType[i]}`;
    }
    fs.writeFileSync(filename, "");
  }
}
let count = 0;
Object.values(types).forEach((element) => {
  count += element.length;
});
console.log("total files made:", fs.readdirSync("./8FileOrganizer/src").length);
console.log("total types:", count);
