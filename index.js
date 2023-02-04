#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter your sentence to count the words"
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(`Total number of words are ${words.length}`);
