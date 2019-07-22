//This version is more feature-rich than required.
var playing = true;
var money = 1;
var cost = .25;
var name = prompt("Enter Player Name:");
var counter = 0;
var plays = "<h3>Plays:</h3><br/>";
alert(`Hello ${name}!`);
alert(`Games are $${cost} and you have $${money}`);
while(playing && money > 0){
    let didWin = Math.floor(Math.random()*10);
    if(didWin >= 5){
        counter++
        money += .25;
        alert(`You played and won! Your total is now ${money}`);
        plays+=`You played and won! Your total is now ${money} <br />`
    }else{
        counter++
        money -= .25;
        alert(`You played and lost. Your total is now ${money}`)
        plays+=`You played and lost. Your total is now ${money} <br />`
    }
    let x = prompt(`Click OK to keep playing`);
    if(x === null){
        playing = false;
    }
}
document.write(`<h1>Thanks For Playing ${name}!</h1> <br /> <h2> You played ${counter} times!</h2> ${plays}`)