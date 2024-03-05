"use strict";
function describeCity(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}
describeCity('karachi');
describeCity('bangkok', 'thailand');
describeCity('toronto', 'canada');
