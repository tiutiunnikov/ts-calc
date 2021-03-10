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
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function readInput(text, callback) {
    return rl.question(text, callback);
}
var Operation;
(function (Operation) {
    Operation[Operation["Addition"] = 1] = "Addition";
    Operation[Operation["Subtraction"] = 2] = "Subtraction";
    Operation[Operation["Multiplication"] = 3] = "Multiplication";
    Operation[Operation["Division"] = 4] = "Division";
})(Operation || (Operation = {}));
var operationNames = new Map([
    [Operation.Addition, "Сложение"],
    [Operation.Subtraction, "Вычетание"],
    [Operation.Multiplication, "Умножение"],
    [Operation.Division, "Деление"],
]);
var operationSign = new Map([
    [Operation.Addition, "+"],
    [Operation.Subtraction, "-"],
    [Operation.Multiplication, "*"],
    [Operation.Division, "/"],
]);
var operationDescription = "";
for (var _i = 0, _a = operationNames.entries(); _i < _a.length; _i++) {
    var _b = _a[_i], op = _b[0], name_1 = _b[1];
    operationDescription += op + ") " + name_1 + "\n";
}
function execIteration() {
    readInput(operationDescription, function (operationUserInput) {
        var op = parseInt(operationUserInput);
        if (!(op in Operation)) {
            console.log("неверный код операции");
            execIteration();
            return;
        }
        readInput("Введите первое число\n", function (firstNumUserInput) {
            var a = parseInt(firstNumUserInput);
            if (Number.isNaN(a)) {
                console.log("не число");
                execIteration();
                return;
            }
            readInput("Введите второе число\n", function (secondNumUserInput) {
                var b = parseInt(secondNumUserInput);
                if (Number.isNaN(b)) {
                    console.log("не число");
                    execIteration();
                    return;
                }
                // теперь можно что-нибудь сделать с a и b
                console.log(a + " " + operationSign.get(op) + " " + b);
            });
        });
    });
}
execIteration();
