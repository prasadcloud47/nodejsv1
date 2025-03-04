const moment = require('moment-timezone');

function showWelcomeBanner() {
    const timeZone = moment.tz.guess(); // Change to your desired time zone
    const location = 'Kottawa, Sri Lanka'; // Change to your desired location
    const dateTime = moment().tz(timeZone).format('MMMM Do YYYY, h:mm:ss a');

    console.log('====================================');
    console.log('          Welcome to Our App        ');
    console.log('====================================');
    console.log(`Location: ${location}`);
    console.log(`Time Zone: ${timeZone}`);
    console.log(`Current Date and Time: ${dateTime}`);
    console.log('====================================');
}

showWelcomeBanner();