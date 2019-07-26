const Chance = require('chance');
const randomThing = process.argv[2]
const chance = new Chance();
console.log(`Your random ${randomThing} is: ${chance[randomThing]()}`);