#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //RS.
let pinCode = 2756;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === pinCode) {
    console.log("correct pin code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        // = -=  +=
        else {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "fast cash") {
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select the amount which you withdraw",
                type: "list",
                choices: [1000, 3000, 5000, 7000, 10000]
            }
        ]);
        myBalance -= fast.fastcash;
        console.log(`you have successfully withdrawal ${fast.fastcash} \nyour remaining balance is ${myBalance}`);
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("incorrect pin code!!!");
}
