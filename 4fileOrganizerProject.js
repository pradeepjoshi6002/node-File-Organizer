const { dir } = require("console");
const fs = require("fs");
const path = require("path");
const inputArr = process.argv.slice(2);

const command = inputArr[0];
let dirPath = inputArr[1];

switch (command) {
  case "tree":
    treeFunc(dirPath);
    break;
  case "organize":
    // dirPath = inputArr[1];
    organizeFunc(dirPath);
    break;

  case "help":
    helpFunc();
    break;

  default:
    console.log("please input a valid command");
}

function treeFunc(dirPath) {
  console.log("tree command is implemented");
}
function organizeFunc(dirPath) {
  // console.log("organize command is implemented");
  const filenames = fs.readdirSync(dirPath);
  for (let i = 0; i < filenames.length; i++) {
    let currentFilePath = path.join(dirPath, filenames[i]);
    if (fs.lstatSync(currentFilePath).isFile()) {
      let copyFolder = path.join(dirPath, path.extname(currentFilePath));
      //make folder
      if (!fs.existsSync(copyFolder)) {
        fs.mkdirSync(copyFolder);
      }
      try {
        fs.copyFileSync(currentFilePath, path.join(copyFolder, filenames[i]));
        fs.unlinkSync(currentFilePath);
      } catch (err) {
        console.log(err);
      }
    }
  }
}

function helpFunc() {
  console.log("Help command is implemented");
}
