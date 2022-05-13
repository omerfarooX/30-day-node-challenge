var fs = require('fs');

/*
// Asyncronous file read
fs.readFile('message.txt', (error, data) => {
    if(error)
        throw error;

    console.log('Content:' + data);
});
*/

/*
// Syncronous file read
let content = fs.readFileSync('message.txt');
console.log('Content: ' + content);
*/

/* 
// Asyncronous file write
let content = 'Wolcome to my world';
fs.writeFile('message.txt', content, (error) => {
    if(error)
        throw error;

    console.log('File saved!');
});
*/

/*
// Syncronous file Write 
let content = 'This is my world';
fs.writeFileSync('message.txt', content);
console.log('File saved!');
*/

/*
// Asyncronous file append
let content = 'This is an append';
fs.appendFile('message.txt', content, (error) => {
    if(error)
        throw error;

    console.log('File appended');
});
*/

/*
// Syncronous file append
let content = 'I am another append';
fs.appendFileSync('message.txt', content);
console.log('File appended!');
*/

/*
// ASyncronous file rename
fs.rename('message.txt', 'message2.txt', (error) => {
    if(error)
        throw error;

    console.log('File Renamed!');
});
*/

/*
// Syncronous file rename
fs.renameSync('message2.txt', 'message3.txt')
console.log('File Renamed!');
*/

/*
// ASyncronous file delete
fs.unlink('message.txt', (error) => {
    if(error)
        throw error;

    console.log('file deleted!');
})
*/

/*
// Sycnronous file delete
fs.unlinkSync('message.txt');
console.log('file deleted!');
*/