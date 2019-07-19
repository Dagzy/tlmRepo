//Author's note: Capitalized words (EXAMPLE) are important vocabulary words. Understanding these words and what you mean when you say them will give you a much deeper understanding of what you are doing.


// In our index.html file, we told the computer that when the button gets clicked, it should run a function with the name of "clicked" and pass it the event. Let's break that down into something a little more understandable:

//First, we have to define our function. Let's use a function declaration for this exercise; this means that we are DECLARING that a FUNCTION exists. 

//Remember, we told the computer that our function would be called "clicked" so we have to name it that here. JavaScript is case-sensitive, so "CLICKED" will not work, and neither will "Clicked" or "cLICKED".
function clicked(e){
//Now that our function is declared, we need to DEFINE it. The definition of the function is what commands will be run by the computer when the function is INVOKED.
  
//First, it's worth noting the "e" inside of the parentheses after our function name. That "e" is the "event" that we passed in from the HTML. We have to have that event to refer to so we can do this:
    e.preventDefault();
//We must preventDefault to keep the page from refreshing when we click our button. Normally, this is considered a "submit" event and would cause the page to refresh.
    
//Next, let's get the text out of the text input that our user can type into:
let input = document.getElementById("new-item").value;
//So, we're getting the element by the ID attached to it, then selecting only the "value" property.
//
    let list = document.getElementById("note-list");
//
    let note = document.createElement("li")
//
    note.innerText = input
//
    list.appendChild(note)
}
























// const eduBuilding = [
//     ["Culinary", 10, "Grice","students",[]],
//     ["BizTech", 12, "Grube","students",[]],
//     ["TLM", 17, "Williams","students",["Medley","Lopez"]],
//     ["TASC", 15, "Richards","students",[]],
//     ["Cosmo", 10, "Grice","students",[]]
// ]

// function runALoop(someArray){
//     var whatWeReturn = ""
//     for (var i = 0; i < eduBuilding.length; i++) {
//         for (var j = 0; j < eduBuilding[i].length; j++) {
//             whatWeReturn += eduBuilding[i][j]
//         }
//     }    
//     return whatWeReturn
// }
// var returnedThing = runALoop(eduBuilding)
// console.log(returnedThing);


// var str1 = "Ohh no"
// var str2 = "Ohhh no"
// var str3 = "Ohhhh no"
// var str4 = "Ohhhhh no"
// var str5 = "Ohhhhhh no"
// var str6 = "Ohhhhhhh no"

// var regex = /Oh{3,6} n/

// var a = regex.test(str1)
// var b = regex.test(str2)
// var c = regex.test(str3)
// var d = regex.test(str4)
// var e = regex.test(str5)
// var f = regex.test(str6)
// var str = "42 42 42"
// var x = /(\d)+\s{3}/
// x.test(str)


// var myarr = [4, 3, 2, 1]
// var q = myarr.sort((x, y, z)=>{
//     console.log(`It's x: ${x}, y: ${y}, and z: ${z}`);
//     return x - y
// })
// var myarr = ["one", 2, false]
// function cb(x){
//     return typeof x
// }
// var q = myarr.sort((x)=>cb(x))






// db.restaurants.find({"address.coord":/(\d)\1\1/})




// ([a-zA-Z0-9])\1{2,}


// /(\d)\1\1/