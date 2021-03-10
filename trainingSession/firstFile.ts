
// типы (как классы) называются с Заглавной
// переменные с маленькой
/*enum Operation {
    Addition = 1,
    Subtraction = 2,
    Multiplication = 3,
    Division = 4,
}
let operationNames: Map<Operation, string> = new Map([
    [Operation.Addition, "Сложение"],
    [Operation.Subtraction, "Вычетание"],
    [Operation.Multiplication, "Умножение"],
    [Operation.Division, "Деление"],
]);
for (let [operation,name] of operationNames.entries()) {
    console.log(`${operation}) ${name}`)
}


/*Написать калькулятор, который при выполнении будет предлагать:
1) Сложение (попросит ввести а и b)
2) Вычетание (попросит ввести а и b)
3) Умножение (попросит ввести а и b)
4) Деление (попросит ввести а и b)

Выберите операцию: 

массив string = [Сложение, Вычетание, Уможение, Деление ]

вывести этот массив через for

While i != 1,2,3,4 
Выберите операцию

if 1 - выполнить функцию сложение */ 



let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readInput(text: string, callback: (result: string) => void): void {
    return rl.question(text, callback);
}

enum Operation {
    Addition = 1,
    Subtraction = 2,
    Multiplication = 3,
    Division = 4,
}

let operationNames: Map<Operation, string> = new Map([
    [Operation.Addition, "Сложение"],
    [Operation.Subtraction, "Вычетание"],
    [Operation.Multiplication, "Умножение"],
    [Operation.Division, "Деление"],
]);

let operationSign: Map<Operation, string> = new Map([
    [Operation.Addition, "+"],
    [Operation.Subtraction, "-"],
    [Operation.Multiplication, "*"],
    [Operation.Division, "/"],
]);

let operationDescription = "";
for (let [op, name] of operationNames.entries()) {
    operationDescription += `${op}) ${name}\n`;
}


function execIteration() {
    readInput(operationDescription, (operationUserInput) => {
        let op: Operation = parseInt(operationUserInput);
        if (!(op in Operation)) {
            console.log("неверный код операции");
            execIteration();
            return;
        }
    
        readInput("Введите первое число\n", (firstNumUserInput) => {
            let a = parseInt(firstNumUserInput);
            if (Number.isNaN(a)) {
                console.log("не число");
                execIteration();
                return;
            }
        
            readInput("Введите второе число\n", (secondNumUserInput) => {
                let b = parseInt(secondNumUserInput);
                if (Number.isNaN(b)) {
                    console.log("не число");
                    execIteration();
                    return;
                }

                // теперь можно что-нибудь сделать с a и b
                console.log(`${a} ${operationSign.get(op)} ${b}`);
            });
        });
    });
}

execIteration();
