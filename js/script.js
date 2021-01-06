choices = ["Rock" , "Paper", "Scissor", "Lizard", "Spock"]
console.log(choices[0])



fetch("https://csa2020studentapi.azurewebsites.net/rpsls").
then(data =>{
    data.text().
    then(value => console.log(value))
});