var playing = true;
var money = 10;
var cost = .25;
var name = prompt("Enter Player Name:");
alert(`Hello ${name}!`);
alert(`Games are $${cost} and you have $${money}`);
while(playing){
    let didWin = Math.floor(Math.random()*10);
    if(didWin >= 5){
        money += .25;
        alert(`You played and won! Your total is now ${money}`);
    }else{
        money -= .25;
        alert(`You played and lost. Your total is now ${money}`)
    }
    let x = prompt(`Click OK to keep playing`);
    if(x != null){
        console.log(`Working`);
    }else{
        document.write(`<h1>Thanks For Playing!</h1>`)
        playing = false;
    }


    // if(){
    // }
}