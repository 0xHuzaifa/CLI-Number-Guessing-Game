import inquirer from "inquirer";
async function GuessGame() {
    const systemGeneratedNumber = Math.floor(Math.random() * 10);
    let answer = await inquirer.prompt({
        name: "userGuess",
        type: "number",
        message: "Guess the number b/w 0 to 9"
    });
    return ({
        guess: answer.userGuess,
        systemGeneratedNumber,
    });
}
async function result() {
    let continueGame = true;
    do {
        const game = GuessGame();
        const { guess, systemGeneratedNumber } = await game;
        if (isNaN(guess)) {
            console.log(`Invalid Number`);
        }
        else if (guess === systemGeneratedNumber) {
            console.log(`Wao! great you guess the right number. You Win!`);
            console.log("Your Guess:", guess);
            console.log("The Number:", systemGeneratedNumber);
        }
        else {
            console.log(`Ops! you guess the wrong number. Better luck next time.`);
            console.log("Your Guess:", guess);
            console.log("The Number:", systemGeneratedNumber);
        }
        let choose = await inquirer.prompt({
            name: "choice",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want to play again? "
        });
        continueGame = choose.choice === "Yes";
    } while (continueGame);
}
result();
