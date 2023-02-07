let flipButton = document.querySelector(“#flipbutton”);
let resetButton = document.querySelector(“#resetbutton”);

let heads = 0;
let tails = 0;

flipButton.addEventListener(“click”, () => {
    let i = Math.floor(Math.random() * 2);

    if(i){heads++;}else{
        tails++;
    }