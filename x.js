let x = Math.random();
function GetComputerChoice(x) {
    if (x<=0.33) { return "Rock"  
    }
    else if (x<=0.66 && x>0.33 ) {return "Paper" 
    }
    else { return "Scissor"}
}



let n= prompt (String)
function GetHumanChoice(n) {
    return n }
    
    
let humanscore=0
let computerscore=0
let humanchoice=GetHumanChoice(n);
let computerchoice=GetComputerChoice(x);


function PlayRound(computerchoice,humanchoice){

if (computerchoice==="Paper" && ( humanchoice==="Rock"|| humanchoice==="rock"|| humanchoice==="ROCK" )) {  return ("You loose ! the computer wins!")  }
else if (computerchoice==="Rock" && ( humanchoice==="Paper"|| humanchoice==="paper"|| humanchoice==="PAPER")) { return ("You win ! the computer looses!" ) }
else if(computerchoice==="Scissor" && (humanchoice==="Rock"|| humanchoice==="rock"|| humanchoice==="ROCK")) {return  ("You win ! the computer looses!")  }
else if(computerchoice==="Paper" && (humanchoice==="Scissor"|| humanchoice==="scissor"|| humanchoice==="SCISSOR"))  { return ("You win ! the computer looses!")  }
else if(computerchoice==="Scissor" && (humanchoice==="Paper"|| humanchoice==="paper"|| humanchoice==="PAPER")) { return ( "You loose ! the computer wins!")}
else if(computerchoice==="Rock" && (humanchoice==="Scissor"|| humanchoice==="scissor"|| humanchoice==="SCISSOR")) {return  ("You loose ! the computer wins!")  }
else if(computerchoice==="Scissor" && (humanchoice==="Scissor"|| humanchoice==="scissor"|| humanchoice==="SCISSOR")) {  return("No one wins, it is a draw!")  }
else if(computerchoice==="Paper" &&  (humanchoice==="Paper"|| humanchoice==="paper"|| humanchoice==="PAPER")) {   return ("No one wins, it is a draw!")  }
else if(computerchoice==="Rock" && ( humanchoice==="Rock"|| humanchoice==="rock"|| humanchoice==="ROCK") ){   return ("No one wins, it is a draw!")  }
}




function PlayGame(humanscore,computerscore) {
    for (let i = 0; i < 5; i++) { 

        humanchoice= prompt ("PLease enter your choice");
        let x = Math.random();
        computerchoice=GetComputerChoice(x);

    let result = PlayRound(computerchoice, humanchoice);
   
    console.log(`Round ${i + 1}: Computer chose ${computerchoice}, You chose ${humanchoice}`);
    console.log(result);


    
    if (result === "You win ! the computer looses!") {  humanscore+=1 }
    else if (result==="You loose ! the computer wins!")  {  computerscore+=1  }
    else { humanscore==humanscore && computerscore==computerscore}}
        
    console.log (`Final Scores - You: ${humanscore}, Computer: ${computerscore}`);

return {humanscore,computerscore};


    


}
console.log(PlayGame(humanscore,computerscore));



