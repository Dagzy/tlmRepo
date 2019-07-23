// Instructions:
// Create 3 variables. One called: "name", one called "pinballCount", and one called "stillPlaying".
// The name variable should be set to your name.
// The pinballCount variable should be set to a number.
// The stillPlaying variable should be set to true or false.


// WRITE YOUR CODE HERE
const name = "Quincy";
let pinballCount = 3;
let stillPlaying = false;


var totalCost = pinballCount * 0.25;

alert("Welcome to the arcade, " + name + "!");

alert("Pinball games are $0.25 each, and you want to play " + pinballCount + " times.");

alert("Your total is: $" + totalCost);

alert("Do you want to keep playing? " + stillPlaying);








//The following version is more feature-rich than required.
// var playing = true;
// var money = 1;
// var cost = .25;
// var name = prompt("Enter Player Name:");
// var counter = 0;
// var plays = "<h3>Game Log:</h3><br/>";
// alert(`Hello ${name}!`);
// alert(`Games are $${cost} and you have $${money}`);
// while (playing && money > 0) {
//     var timesPlayed = prompt("How many times would you like to play?")
//     timesPlayed = parseInt(timesPlayed)
//     if (!isNaN(timesPlayed)) {
//         let didWin = Math.floor(Math.random() * 10);
//         if (didWin >= 5) {
//             counter++
//             money += (.25 * timesPlayed);
//             alert(`You played and won! Your total is now $${money}`);
//             plays += `You played and won! Your total is now $${money} <br />`
//         } else {
//             counter++
//             money -= (.25 * timesPlayed);
//             alert(`You played and lost. Your total is now $${money}`)
//             plays += `You played and lost. Your total is now $${money} <br />`
//         }
//         let x = prompt(`Click OK to keep playing`);
//         if (x === null) {
//             playing = false;
//         }
//     } else {
//         alert("Enter a number.")
//     }
// }
// document.write(`<h1>Thanks For Playing ${name}!</h1> <br /> <h2> You played ${counter} times!</h2> <br/> ${plays}`)