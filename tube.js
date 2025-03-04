const path = require('path');
const os = require('os');
const fs = require('fs');
const printTxt = require('./print_txt');

var txt = path.parse(__filename);
printTxt(txt);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
// var filedir = fs.readdirSync('./');



printTxt(`Total Memory: ${totalMemory}`);
printTxt(`Free Memory: ${freeMemory}`);
// printTxt(`Files in directory: ${filedir}`);

console.log('====================================');
console.log('====================================');

fs.readdir('./', function(err, files){
    if(err) printTxt('Error', err);
    else printTxt('Result', files);
});
