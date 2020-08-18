
const inquirer = require("inquirer");


function calculator(param1, param2) {

    var num1 = param1
    var num2 = param2
    
    function add() {
        console.log(num1 + num2)
    }
    function subtract() {
        console.log(num1 - num2)
    }
    function divide() {
        console.log(num1 / num2)
    }
    function multiply() {
        console.log(num1 * num2)
    }


    inquirer.prompt([
        {
            name: "action",
            type: "rawlist",
            choices: [
                "add",
                "subtract",
                "divide",
                "multiply",
                "exit"
            ]
        }]).then(function(answer) {
   
            switch(answer.action) {
                case "add":
                    add()
                    break;

                case "subtract":
                    subtract()
                    break;

                case "divide":
                    divide()
                    break;

                case "multiply":
                    multiply()
                    break;

                case "exit":
                    console.log("Exiting...")
                    break;

                default:
                    console.log("default")
                
            }
        })
}

// Add in numbers here to be calculated
calculator(10, 15)