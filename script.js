// var screen = document.getElementById("screen");
// $("h1").slideDown();
// var screenValue =" ";
// buttons =$("button");
// for (item of buttons) {
//     item.addEventListener("click",(e) => {
//         butText = e.target.innerTaxt;
//         console.log(butText);
//         if (butText =="x"){
//             butText="*";
//             screenValue+=butText;
//             screen.vlaue=screenValue;

//         }
//         else if (butText =="C"){
//             screenValue="";
//             screen.value=screenValue;
//         }
//         else if (butText =="="){
//             screen.value=eval(screenValue);

//         }
//         else{
//             screenValue+=butText;
//             screen.value=screenValue;
//         }

//     })
// }

document.addEventListener("DOMContentLoaded", function () {
    const screen = document.getElementById("screen");
    const buttons = document.querySelectorAll(".button");
    let equation = "";

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const buttonText = button.innerText;

            if (buttonText === "=") {
                try {
                    const result = eval(equation);
                    screen.value = result;
                    equation = result.toString();
                } catch (error) {
                    screen.value = "Error";
                    equation = "";
                }
            }else if (buttonText === "C") {
                screen.value = "";
                equation = "";
            } 
            
            else {
                equation += buttonText;
                screen.value = equation;
            }
        });
    });
});
