let flipButton = document.querySelector(“#flipbutton”);
let resetButton = document.querySelector(“#resetbutton”);

let heads = 0;
let tails = 0;
// This is saying immediatey disable the button, then 5 seconds later re-enable it, (milliseconds)
function disableButton(){
    flipButton.disabled = true;
    setTimeout(function(){
        flipButton.disabled = false;
    },5000);
}

flipButton.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    // number would be 0 or 1

   // 0 or 1- any non zero number is true. 1=true, 0=false
    if(i === 1){heads++;}else{
        tails++;
    }
    disableButton();
});

//1. Check which radio button is selected

const headSelected= document.querySelector('#heads');
const tailsSelected= document.querySelector('#tails');
const radioButtons = document.querySelectorAll('input[name="radio"]');

//2. Second, register a click event listener on the button element:
flipbutton.addEventListener('click', () => {
});

//3. Third, iterate over the radio buttons and get the value of the selected radio button:
let selectedSize;
for (const radioButton of radioButtons) {
  if (radioButton.checked) {
    selectedSize = radioButton.value;
    break;
  }
}

//4. Finally set the message for the output element:
output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;


// if(document.getElementById('heads').checked == true) {   
//     document.write("Heads radio button is selected");   
// } else {  
//     document.write("Tails radio button is selected");   
// }  