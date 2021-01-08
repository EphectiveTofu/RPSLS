// playerChoices = ["Rock" , "Paper", "Scissor", "Lizard", "Spock"]
// console.log(choices[0])
// let userAns = "Rock";
let cpuAns;




let winCount = 0;
let loseCount = 0;
let tieCount = 0;




//Button Elements 
let btnRock = document.getElementById("btnRock");
let btnPaper = document.getElementById("btnPaper");
let btnScissor = document.getElementById("btnScissor");
let btnLizard = document.getElementById("btnLizard");
let btnSpock = document.getElementById("btnSpock");


// This fetch grabs the api for CPU comparison 
// fetch("https://csa2020studentapi.azurewebsites.net/rpsls").
// then(data =>{
//     data.text().
//     then(value => console.log(value))
// });

async function getCPU() {
    let promise = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls");
    cpuAns = await promise.text();
}

getCPU()

btnRock.addEventListener('click', function () {
    compare("Rock")
    getCPU()
    //console.log(cpuAns)
    
})

btnPaper.addEventListener('click', function () {
    compare("Paper")
    getCPU()
    //console.log("Paper")
})

btnScissor.addEventListener('click', function () {
    compare("Scissors")
    getCPU()
    //console.log("Scissor")
})

btnLizard.addEventListener('click', function () {
    compare("Lizard")
    getCPU()
    //console.log("Lizard")
})

btnSpock.addEventListener('click', function () {
    compare("Spock")
    getCPU()
    //console.log("Spock")
})


function compare(userAns) {
    console.log(userAns)
    console.log(cpuAns)
    if (cpuAns == userAns) {
        console.log("Tie! The same thing cannot beat itself you silly goose!")
        tieCount++;
    } else if (userAns == "Rock") {
        if (cpuAns == "Paper" || cpuAns == "Spock") {
            loseCount++;
            console.log(`You Lose because you chose ${userAns} and the computer chose ${cpuAns}`)
            
        } else if (cpuAns == "Scissors" || cpuAns == "Lizard") {
            winCount++;
            console.log(`You win because you chose ${userAns} and the computer chose ${cpuAns}`)

        }
    } else if (userAns == "Paper") {
        if (cpuAns == "Scissors" || "Lizard") {
            loseCount++;
            console.log(`You Lose because you chose ${userAns} and the computer chose ${cpuAns}`)

        } else if (cpuAns == "Rock" || "Spock") {
            wintCount++;
            console.log(`You win because you chose ${userAns} and the computer chose ${cpuAns}`)
        }
    } else if (userAns == "Scissors") {
        if (cpuAns == "Spock" || "Rock") {
            loseCount++;
            console.log(`You Lose because you chose ${userAns} and the computer chose ${cpuAns}`)

        } else if (cpuAns == "Scissors" || "Paper") {
            winCount++;
            console.log(`You win because you chose ${userAns} and the computer chose ${cpuAns}`)
        }
    }
    else if (userAns == "Lizard") {
        if (cpuAns == "Rock" || "Scissors") {
            loseCount++;
            console.log(`You Lose because you chose ${userAns} and the computer chose ${cpuAns}`)

        } else if (cpuAns == "Paper" || "Spock") {
            winCount++;
            console.log(`You win because you chose ${userAns} and the computer chose ${cpuAns}`)
        }
    } else if (userAns == "Spock") {
        if (cpuAns == "Paper" || "Lizard") {
            loseCount++;
            console.log(`You Lose because you chose ${userAns} and the computer chose ${cpuAns}`)

        } else if (cpuAns == "Rock" || "Scissors") {
            winCount++;
            console.log(`You win because you chose ${userAns} and the computer chose ${cpuAns}`)
        }
    } else {
        console.log("We have an issue");
    }
}