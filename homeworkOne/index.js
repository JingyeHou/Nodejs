import * as Readline from "readline"
import * as FS from "fs"

let list = [];
let sum = 0;

function readFiles(dirname, onFileContent, onError) {
  FS.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach((filename) => {
      FS.readFile(dirname + filename, 'utf-8', (err, content) => {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(content);
      });
    });
  });
}

readFiles("database/", (content) => {
    list.push(content);
    sum += Number(content)
    FS.writeFile("output/output.txt", sum, (err) => {
         return
    })
}, (err) => {
  throw err;
})

// FS.readdirSync("database", (err, filenames) => {
//     if (err) {
//       onError(err);
//       return;
//     }
//     filenames.forEach((filename) => {
//       FS.readFile("database/" + filename, 'utf-8', (err, data) => {
//         if (err) {
//           onError(err);
//           return;
//         }
//         console.log(data);
//         list.push(data);
//       });
//     });
// });



// readFiles("database", list);
// console.log(list);
// const sum = list
//     .map(str => Number(str))
//     .reduce((acc, num) => acc + num);
