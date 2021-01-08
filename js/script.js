playerChoices = ["Rock" , "Paper", "Scissor", "Lizard", "Spock"]
console.log(choices[0])

let winCount = 0;
let loseCoun = 0;
let tieCount = 0;




//Button Elements 
let btnRock = document.getElementById("btnRock");
let btnPaper = document.getElementById("btnPaper");
let btnScissor = document.getElementById("btnScissor");
let btnLizard = document.getElementById("btnLizard");
let btnSpock = document.getElementById("btnSpock");


//This fetch grabs the api for CPU comparison 
// fetch("https://csa2020studentapi.azurewebsites.net/rpsls").
// then(data =>{
//     data.text().
//     then(value => console.log(value))
// });

async function cpuChoice(){
    let promise = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls");
    cpuAns = await promise.text();
    compare();
}


btnRock.addEventListener('click', function(){
    console.log("Rock")
})

btnPaper.addEventListener('click', function(){
    console.log("Paper")
})

btnScissor.addEventListener('click', function(){
    console.log("Scissor")
})

btnLizard.addEventListener('click', function(){
    console.log("Lizard")
})

btnSpock.addEventListener('click', function(){
    console.log("Spock")
})

