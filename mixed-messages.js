const firstName = require('./modules/first-name.js');
const middleName = require('./modules/middle-name.js');
const lastName = require('./modules/last-name.js');

const prompt = require('prompt-sync')();
let name = prompt('What is your Full name?').toLowerCase();

//const age = prompt('What is your age?');
let heroOrVillainOrSidekick = "";

const randomNumber = (name)=>{
    let one = [];
    let two = [];
    numOfChar = name.length;
    for(let i=0;i<numOfChar;i++){
        oneOrTwo = Math.floor(Math.random()*2)+1;
        if (oneOrTwo === 1){
            one.push(oneOrTwo)
        } else {
            two.push(oneOrTwo);
        };
    };
    if(one.length > two.length){
        heroOrVillainOrSidekick = 'Super-Hero';
    } else if(one.length < two.length){
        heroOrVillainOrSidekick = 'Super-Villain';
    } else if(one.length === two.length){
        heroOrVillainOrSidekick = 'Side-Kick';
    } 
    return heroOrVillainOrSidekick;
    
};

const firstNameLength = firstName.length;
const middleNameLength = middleName.length;
const lastNameLength = lastName.length;
const superHeroName = () =>{
    const first = firstName[Math.floor(Math.random()*(firstNameLength))];
    const middle = middleName[Math.floor(Math.random()*(middleNameLength))];
    const last = lastName[Math.floor(Math.random()*(lastNameLength))];
    return `Hi ${name}! You are a ${randomNumber(name)} your name is ${first}-${middle}-${last}!`
    
};
console.log(superHeroName());
//console.log(name);

