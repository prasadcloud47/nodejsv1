const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to the program!");

readline.question('What is your name? ', name => {
    console.log(`Good morning, ${name}!`);
    readline.close();
});