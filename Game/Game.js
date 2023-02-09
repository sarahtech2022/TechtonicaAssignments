let flipButton = document.querySelector("#flipbutton");
let resetButton = document.querySelector("#resetbutton");
console.log("hi")
let heads = 0;
let tails = 0;
// This is saying immediatey disable the button, then 5 seconds later re-enable it, (milliseconds)
function disableButton(){
    flipButton.disabled = true;
    setTimeout(function(){
        flipButton.disabled = false;
    },5000);
}

// flipButton.addEventListener("click", () => {
//     let randomHorT = Math.floor(Math.random() * 2);
//     // number would be 0 or 1

//    // 0 or 1- any non zero number is true. 1=true, 0=false
//     if(randomHorT === 1){heads++;}else{
//         tails++;
//     }
//     disableButton();
// });

//1. Check which radio button is selected

const headSelected= document.querySelector('#heads');
const tailsSelected= document.querySelector('#tails');
const radioButtons = document.querySelectorAll('input[name="radioOption"]');

//Add 3 to 2 so, we want to see what information is selected EACH time the button is click, if 3 is not part of 2 then the answer will stay forever, but we want it each time button is clicked
//2. Second, register a click event listener on the button element:
//radioButton value will be a string =- either heads or tails
//You cannot compare numbers to strings, it will always be false!!
flipButton.addEventListener('click', () => {
    let randomHorT = Math.floor(Math.random() * 2);
    if (randomHorT === 1){
        randomHorT= "heads";
    }else{
        randomHorT= "tails";
    }
    let selectedRadioButton;
for (const radioButton of radioButtons) {
  if (radioButton.checked) {
    selectedRadioButton = radioButton.value;
    break;
  }
}
let winOrLose= document.getElementById('resultdiv')
if (selectedRadioButton === randomHorT){
    winOrLose.innerText= `You got ${selectedRadioButton} and you won!`
}else{
    winOrLose.innerText= `You got ${selectedRadioButton} and you lost!`
}

});





//3. Third, iterate over the radio buttons and get the value of the selected radio button:
//Break needed because theres only 1 of 2 options, so once one is selected we want to break
// let selectedRadioButton;
// for (const radioButton of radioButtons) {
//   if (radioButton.checked) {
//     selectedRadioButton = radioButton.value;
//     break;
//   }
// }

//Not needed anymore: 
//4. Finally set the message for the output element:
//resultdiv.innerText = selectedRadioButton ? `You selected ${selectedRadioButton}` : `You haven't selected any button`;


// if(document.getElementById('heads').checked == true) {   
//     document.write("Heads radio button is selected");   
// } else {  
//     document.write("Tails radio button is selected");   
// }  