// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg")

// const userScorepara = document.querySelector("#user-score");
// const compScorepara = document.querySelector("#comp-score");


// let showWinner = (userWin,userChoice,comChoice) => {
//     if (userWin) {
//         userScore++;
//         userScorepara.innerText = userScore;
//         console.log("user will win");
//         msg.innerText = `you win your ${userChoice} beats ${comChoice}`;
//         msg.style.backgroundColor = "green";
//     } else {
//         compScore++;
//         compScorepara.innerText = compScore;
//         console.log("user will lose");
//         msg.innerText = `you lose your ${comChoice} beats ${userChoice}`;
//         msg.style.backgroundColor = "red";

//     }
// };

// const drawGame = () => {
//     console.log("Game was draw");
//     msg.innerText = "game was draw, play Again";
//     msg.style.backgroundColor = "#081b31";
// }

// const gencomchoice = () => {
//     const option = ["rock","paper","scissor"];
//     const randIdex = Math.floor(Math.random()*3);
//     return option[randIdex];
// }

// const playgame = (userChoice) => {
//     console.log("user choice =",userChoice)
// //Generate computer choice
// const comChoice = gencomchoice();
//     console.log("com choice =",comChoice);
    
//     if ( userChoice === comChoice) {
//         //draw condition
//         drawGame();
//     } else {
//         let userWin = true;
//         if (userChoice === "rock"){
//             //paper,scissor
//             userWin=comChoice === "paper" ? false : true;
//         } else if(userChoice === "paper"){
//             userWin = comChoice === "scissor" ? false:true;
//         } else {
//             userWin = comChoice === "paper" ? false : true;
//         }
//         showWinner(userWin,userChoice,comChoice);
//     }
        
// };

// choices.forEach((choice) =>{
//     choice.addEventListener("click", () => {
//         const userChoice = choice.getAttribute("id");
//         // console.log("choice was clicked",userChoice);
//         playgame(userChoice);
//     });
// }); 

let userScore = 0;
let compScore = 0;
let attempts = 0;

const maxAttempts = 10;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

let showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("user will win");
        msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("user will lose");
        msg.innerText = `You lose! Your ${comChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was a draw, play again";
    msg.style.backgroundColor = "#081b31";
};

const gencomchoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randIdex = Math.floor(Math.random() * 3);
    return option[randIdex];
};

const playgame = (userChoice) => {
    if (attempts < maxAttempts) {
        attempts++;
        console.log(`Attempt ${attempts}: User choice = ${userChoice}`);

        // Generate computer choice
        const comChoice = gencomchoice();
        console.log(`Attempt ${attempts}: Computer choice = ${comChoice}`);

        if (userChoice === comChoice) {
            // Draw condition
            drawGame();
        } else {
            let userWin = true;
            if (userChoice === "rock") {
                // Paper, scissor
                userWin = comChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = comChoice === "scissor" ? false : true;
            } else {
                userWin = comChoice === "paper" ? false : true;
            }
            showWinner(userWin, userChoice, comChoice);
        }
    } else {
        // Declare overall winner after 10 attempts
        if (userScore > compScore) {
            msg.innerText = "Congratulations! You(user) are the overall winner.";
            msg.style.backgroundColor = "green";
        } else if (compScore > userScore) {
            msg.innerText = "Sorry! Computer is the overall winner.";
            msg.style.backgroundColor = "red";
        } else {
            msg.innerText = "It's a tie! The game is overall drawn.";
            msg.style.backgroundColor = "#081b31";
        }
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
