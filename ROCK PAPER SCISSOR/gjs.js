let userscore=0;
let compscore=0;

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const choises=document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const genCompChoice= () =>{
 const option=["ROCK","PAPER","SCISSOR"];
const randomIdx=Math.floor(Math.random() *3);
return option[randomIdx];
}

const drowGame= () =>{
    console.log(" The game was drow ");
    msg.innerText = " Game was Drow ! ";
}

const showWin = (userWin, userChoice, compChoice) =>{
  if(userWin){
    userscore++;
    userscorepara.innerText = userscore;
    console.log(" You win !! ");
    msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}` ;
    msg.Style.backgroundColor ="green";
    
  }

  
  else{
    compscore++;
    compscorepara.innerText = compscore;
    console.log("You lose !!");
    msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}` ;
    msg.Style.backgroundColor ="red";
  }
}
 
function playGame(userChoice) {
    console.log(" User choice is = ", userChoice);
    //Generet computer choice
    const compChoice = genCompChoice();
    console.log(" comp choice is = ", compChoice);

    if (userChoice === compChoice)
        // the game was drow 
        drowGame();

    else {
        let userWin = true;
        if (userChoice === "ROCK") {
            // PAPER, SCISSOR
            userWin = compChoice === "PAPER" ? false : true;
        }
        else if (userChoice === "PAPER") {
            //ROCK,SCISSOR
            userWin = compChoice === "SCISSOR" ? false : true;
        }
        else {
            // ROCK , PAPER 
            userWin = compChoice === "ROCK" ? false : true;
        }
      showWin(userWin, userChoice, compChoice);
    }
}

choises.forEach( (choice) =>{
    console.log(choice);
   choice.addEventListener("click",() =>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
   });
 });