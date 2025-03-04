function printTxt(label, data) {
    if (Array.isArray(data)) {
        console.log(`${label}:`);
        data.forEach(item => console.log(`  - ${item}`));
    } else {
        console.log(`${label}: ${data}`);
    }
}

module.exports = printTxt;