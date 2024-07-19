#!/usr/bin/env node
import inquirer from 'inquirer';
// Use Inquirer here
// import Choice from "inquirer/lib/objects/choice";
// import { todo } from "node:test";
// Use await here
let todos = [];
while (true) {
    let input = await inquirer.prompt([
        {
            name: "Todo Item",
            type: "input",
            message: 'add todo item in listing'
        },
        {
            name: "addMore",
            type: 'list',
            choices: ["yes", "no"]
        }
    ]);
    const { TodoItem, addMore } = input;
    todos.push(input["Todo Item"]); // Make sure to use the correct property name
    if (addMore === "no") {
        console.log("Todolist:");
        todos.forEach(todo => console.log(todo)); // Print each todo item
        break;
    }
}
;
