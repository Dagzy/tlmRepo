const eduBuilding = [
    ["Culinary", 10, "Grice","students",[]],
    ["BizTech", 12, "Grube","students",[]],
    ["TLM", 17, "Williams","students",["Medley","Lopez"]],
    ["TASC", 15, "Richards","students",[]],
    ["Cosmo", 10, "Grice","students",[]]
]

function runALoop(someArray){
    var whatWeReturn = ""
    for (var i = 0; i < eduBuilding.length; i++) {
        for (var j = 0; j < eduBuilding[i].length; j++) {
            whatWeReturn += eduBuilding[i][j]
        }
    }    
    return whatWeReturn
}
var returnedThing = runALoop(eduBuilding)
console.log(returnedThing);


var str1 = "Ohh no"
var str2 = "Ohhh no"
var str3 = "Ohhhh no"
var str4 = "Ohhhhh no"
var str5 = "Ohhhhhh no"
var str6 = "Ohhhhhhh no"

var regex = /Oh{3,6} n/

var a = regex.test(str1)
var b = regex.test(str2)
var c = regex.test(str3)
var d = regex.test(str4)
var e = regex.test(str5)
var f = regex.test(str6)
var str = "42 42 42"
var x = /(\d)+\s{3}/
x.test(str)


var myarr = [4, 3, 2, 1]
var q = myarr.sort((x, y, z)=>{
    console.log(`It's x: ${x}, y: ${y}, and z: ${z}`);
    return x - y
})
var myarr = ["one", 2, false]
function cb(x){
    return typeof x
}
var q = myarr.sort((x)=>cb(x))






// db.restaurants.find({"address.coord":/(\d)\1\1/})




// ([a-zA-Z0-9])\1{2,}


// /(\d)\1\1/