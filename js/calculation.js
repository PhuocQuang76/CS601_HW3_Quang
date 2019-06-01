alert("WELCOME TO THE WEBPAGE");
const calculate = () => {
    let response = 'y';

    let number1;
    let number2;
    let total;

    let visitorName = prompt("Please enter your name:","type your name here");
    alert(visitorName + ", welcome to addition calculation.");

    do{
        let firstNumber = prompt("PLease enter your first number:").trim();
        while(firstNumber.length == 0 || isNaN(firstNumber)){
            alert("Invalid input. Please input a numnber.");
            firstNumber = prompt("PLease enter your first number:").trim();
        }

        appendtape(firstNumber);
        appendtape("+");
        let secondNumber = "";
        setTimeout(()=>{
            secondNumber = parseInt(prompt("PLease enter your second number:"));
            while(secondNumber.length == 0 || isNaN(secondNumber)){
                alert("Invalid input. Please input a numnber.");
                secondNumber = prompt("PLease enter your first number:").trim();
            }
        }, 500);

        appendtape(secondNumber);

        let total = parseInt(firstNumber) + parseInt(secondNumber);
        alert("The sum of your two numbers is: " + total);
        if(total > 10){
            alert(total + ": This is a big number");
        }
        else{
            alert(total + ": This is a small number");
        }
        response = prompt("Do you want to try the calculation again? (y = \"yes\", n = \"no\")");
    }while(response == 'y' || response == 'Y' );
};

const appendtape = (number) => {
    var node = document.createElement("div");
    var textnode = document.createTextNode(number);
    node.appendChild(textnode);
    document.getElementById("tape").appendChild(node);
};

const cleartape = () => {
    document.getElementById("tape").innerHTML = "";
};

const greetings = () => {
    if (document.readyState === "complete" )
        alert("Thank you for using my calculation program.");
};