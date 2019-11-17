/*
Project: Dice game
Project by: 
Matric Number: 000803723
Date: 16/11/2019
*/
let author = "Hamzat Habibllahi Adewale";
let matric = 803723;
let date = "16/11/2019"
let title = "Dice game"
console.log("I have sucessfully connect with 000803723.html"); //tells if the .js connects with .html
console.log(` Project: ${title} \n project by: ${author}\n matric number: ${"000" + matric} \n on: ${date}`);

/*******Assignment solution begins**********************/

var newValue;
var idx; // idx is just to manipulate the value to set as getElementById() parameter
var sum = 0; //initially set to zero, will be updated 
var diceMemory = []; //an empty array intend to store all dice value for sorting purpose
var bestRolls =[]; // an empty array intend to store the best three rolls

//function to generate a random number
function getRandomNumber(min, max) {
    return Math.floor(((Math.random() * (max - min)) + min));
}

//function to roll dice
function rollDice() {
       for (x=0; x < 5; x++) {
            newValue = getRandomNumber(1,6);
            diceMemory[x] = newValue;
            sum += newValue;
            idx = "dice"+ (x+1); 
            document.getElementById(idx).innerHTML = newValue;
        }
        result();
    }
//sort algorithm 
function sort(){
    var maxx;
    bestRolls = []; //let us rest of bestRoll array to get things well
    for(n=0;n<3;n++){
        if(diceMemory.length){
            maxx = Math.max(...diceMemory);
            diceMemory = diceMemory.filter(element => element < maxx) ; //update the dice memory to exclude n+1 th highest
            bestRolls[n]= maxx; //update the bestRoll array to include the n+1 th higest
        }   
    }
     console.log(diceMemory);
     console.log(bestRolls);       
}

//single rediced function to be executed on any dice clciked for reroll
function singleReroll(){
    var reroll = getRandomNumber(1,6); //generate a random number for the selected dice
    var loc; //intend to hold current value of each dice having ensured it converted to base 10 integer
    this.innerHTML = reroll; //set the value of selected dice to the reroll value
    //lets make a loop to collate the recent values of all the dice 
    for(n=0;n<5;n++){
        idx = "dice"+ (n+1); 
        loc = parseInt(document.getElementById(idx).innerHTML,10); //get current value of dice with id = idx
        diceMemory[n] = loc; //repopulate dice memory upon reroll of any of the dice
        sum = sum + loc; //recompute the sum
    }  
    result();
}

function result(){
    var BestRollResult=0;
    console.log(diceMemory); //lets see the Array content        
    document.getElementById("total").innerHTML = "You hit "+sum+" in all"; 
    sum=0; //clears the sum 
    sort(); //sorts the values in the dice game memory
    for(x=0;x<bestRolls.length;x++){
        BestRollResult = BestRollResult + bestRolls[x];
    }
    if(bestRolls.length == 3){
        document.getElementById("subTotal").innerHTML = `The sum of your best three hit is ${BestRollResult}`
    }
    if(bestRolls.length == 2){
        document.getElementById("subTotal").innerHTML = `Sorry you dont have a third high hit, the sum of your best two hit is ${BestRollResult}`
    }  
    if(bestRolls.length == 1){
        document.getElementById("subTotal").innerHTML = `Your best hit is ${BestRollResult}, Seems all your dies ties`
    }     
}
//button click event handling part the clcik to roll button
document.querySelector("#rollDice").addEventListener('click',rollDice);
document.querySelector("#dice1").addEventListener('click',singleReroll);
document.querySelector("#dice2").addEventListener('click',singleReroll);
document.querySelector("#dice3").addEventListener('click',singleReroll);
document.querySelector("#dice4").addEventListener('click',singleReroll);
document.querySelector("#dice5").addEventListener('click',singleReroll);