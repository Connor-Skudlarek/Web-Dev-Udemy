var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        this.style.color = "#fff";
  });
}



// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();



function handleClick() {
  alert("I got clicked!");
}

// function add(num1,num2){
//     return num1 + num2;
// }

// function subtract(num1,num2){
//     return num1 - num2;
// }

// function multiply(num1,num2){
//     return num1 * num2;
// }

// function divide(num1,num2){
//     return num1 / num2;
// }

// function calculator(num1,num2,operator){
//     return operator(num1,num2);
// }

// var calcs = calculator(3,6,divide);
// alert(calcs);
