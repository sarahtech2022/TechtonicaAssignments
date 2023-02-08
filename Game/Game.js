let flipButton = document.querySelector(“#flipbutton”);
let resetButton = document.querySelector(“#resetbutton”);

let heads = 0;
let tails = 0;
// This is saying immediatey disable the button, then 3 seconds later reenable it, (milliseconds)
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