const firstName = require('./modules/first-name.js');
const middleName = require('./modules/middle-name.js');
const lastName = require('./modules/last-name.js');

const prompt = require('prompt-sync')();

const name = prompt('What is your Full name?');
const age = prompt('What is your age?');


const firstNameLength = firstName.length;
const middleNameLength = middleName.length;
const lastNameLength = lastName.length;
const superHeroName = () =>{
    const first = firstName[Math.floor(Math.random()*(firstNameLength))];
    const middle = middleName[Math.floor(Math.random()*(middleNameLength))];
    const last = lastName[Math.floor(Math.random()*(lastNameLength))];
    return `Hi ${name}! Your SUPER-HERO name is ${first}-${middle}-${last}!`
    
};
console.log(superHeroName());