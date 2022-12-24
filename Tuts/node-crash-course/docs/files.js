const fs = require('fs');

// Reading files
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

//writing files
// fs.writeFile('./docs/blog.txt', 'Hello world', () => {
//     console.log('file was written');
// })

// fs.writeFile('./docs/blog2.txt', 'Creating a new file', () => {
//     console.log('file was created');
// })

//directories
// if(!fs.existsSync('./assets')){
// fs.mkdir('./assets', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('folder created');
// });
// }else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted');
//     });
// }

//deleting files
// if(!fs.existsSync('./assets')){
//     fs.unlink('./docs/delete-me', (err) => {
//         if(err) {
//             console.log(err)
//         }
//         console.log('file deleted');
//     })
// }
