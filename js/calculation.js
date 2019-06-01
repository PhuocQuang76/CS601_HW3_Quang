alert("WELCOME TO THE WEBPAGE");
const insert = () => {
    let response = 'y';
    let visitorName = prompt("Please enter your name:","type your name here");
    alert(visitorName + ", welcome to addition calculation.");

    do{
        let firstNumber = prompt("PLease enter your first number:").trim();
        while(firstNumber.length == 0 || isNaN(firstNumber)){
            alert("Invalid input. Please input a numnber.");
            firstNumber = prompt("PLease enter your first number:").trim();
        }

        let secondNumber = parseInt(prompt("PLease enter your second number:"));
        while(secondNumber.length == 0 || isNaN(secondNumber)){
            alert("Invalid input. Please input a numnber.");
            secondNumber = prompt("PLease enter your first number:").trim();
        }

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
    document.attachEvent("onreadystatechange", () => {
        if (document.readyState === "complete" )
            alert("Thank you for using my calculation program.");
    });

}
