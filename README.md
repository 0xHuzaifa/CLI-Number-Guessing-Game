# CLI-Number-Guessing-Game-Documentation

## Introduction

Welcome to the documentation for the Number Guessing Game! This project is a command-line interface (CLI) game built using TypeScript. The game is simple yet entertaining; players try to guess a randomly generated number within a specific range.

## Installation

To install and run the Number Guessing Game on your system, you need to have Node.js installed. Follow these steps:

1. Install TypeScript by running the following command in your terminal:

    ```
    npm install typescript
    ```

2. Install the Inquirer package, which is used to get user input, by executing:

    ```
    npm install inquirer
    ```

3. Additionally, install the types for Inquirer by running:

    ```
    npm install --save-dev @types/inquirer
    ```

## How to Play

Once you've installed the necessary dependencies, you can start playing the game. Follow these steps to run the game:

1. Open your terminal.

2. Navigate to the directory where you have the game files.

3. Run the TypeScript compiler to compile the TypeScript code into JavaScript:

    ```
    tsc <filename>.ts
    ```

4. After compilation, run the game using Node.js:

    ```
    node <filename>.js
    ```

5. The game will start, and you'll be prompted to guess a number between 0 and 9.

6. Enter your guess and press Enter.

7. Based on your guess, the game will inform you if you've guessed correctly or incorrectly.

8. After each round, you'll be asked if you want to play again. You can choose to continue or exit the game.

## Code Overview

Let's take a brief look at the code structure:

- The `GuessGame` function generates a random number between 0 and 9, then prompts the user to guess the number.

- The `result` function controls the flow of the game. It repeatedly calls the `GuessGame` function for each round, evaluates the user's guess, and determines if they've won or lost.

- The game continues until the player chooses to exit.

## Conclusion

The Number Guessing Game provides a fun way to pass the time while testing your guessing skills. Feel free to explore the code further and customize it according to your preferences. Enjoy playing!
