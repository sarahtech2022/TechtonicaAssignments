const otherRecipes = ["https://lubnabenhalim.ly/magrood/", "https://thebitterolive.com/libyan-soup/", "https://deliciouslymediterranean.com/authentic-shakshuka/"];

function showList(array){
  const myDiv = document.getElementById("recipelinks");
  const myList = document.createElement("ol"); //creating the ol element
  myDiv.appendChild(myList);
  for(let i = 0; i < array.length; i++){
    let link = array[i];
    console.log(link);
    let recipeList = document.createElement("li"); // same as line 7, here we are creating an li element
    recipeList.innerHTML = `<a href=${link}> ${link} </a>`; //the li element i created on 12, can have innerText, or innerHTML -> they specify what goes inside li element (the actual text), innertext-> it prints out the literal angle brackets < >. innerHTML -> will treat those brackets as actual HTML.
    // a is anchor its putting a link on the page, href-> is the refrence for the link.

    // So esentially wht I am doing on line 13 is using innerHTML to add my link from the text in array[i]
    // first link is inside the href (where u want the link to go) and the second is in the anchor (what is clickable).
    myList.appendChild(recipeList);
    
  }
}
showList(otherRecipes);
// You dont always need to return a function!



//Here I will create an event listener called mouse over, that changes the div color when a user hovers over the dive where the recipe image is!
//create a variable to store DOM element (greenDiv) 
//Call add event listener on that element we made (which will be mouse over)
//That will give us a call back, and in the callback we do our logic 


// new class .colorchange
let greenDiv= document.getElementById("specialdiv") //Will return a list of all the elements that have that class name
greenDiv.addEventListener("mouseover", ()=>{
    greenDiv.classList.add("colorchange") //What i want to happen here, change to light green
}) // On the green Div that we created, add an event listener

greenDiv.addEventListener("mouseout", ()=>{
    //greenDiv.classList.add("recipe-image") This is not needed because we never removed recipe-image!
    greenDiv.classList.remove("colorchange"); //This makes sure that recipe-image and colorchange dont compete, and that we keep the original dark green color from the recipe-image class
})

let myButton = document.getElementById("toggleTiktokVideo");
myButton.addEventListener("click", ()=> {
    const tiktokEmbedDiv = document.getElementById('tiktokembed');
if (tiktokEmbedDiv.style.display === "none") {
    tiktokEmbedDiv.style.display = "block";
    } else {
        tiktokEmbedDiv.style.display = "none";
    }
});


//My WORK: trouble hiding and making video to appear, reason: need to put the if statement which is toggling between the two different style of none and block inside
// of the event listener!
//(Not needed because will occur inside event listener i think?) Here I am hiding my video by default so once the person clicks the link they can watch the video:
//document.getElementById("tiktokembed").style.display = "none";
//Here I am manipulating my button, that I gave ID called videobutton! Next I will add an eventlistener function which fires when the user clicks the button
// let myButton = document.getElementById("toggleTiktokVideo");
// myButton.addEventListener("click", ()=> {
//     const tiktokEmbedDiv = document.getElementById('tiktokembed') 
// });
// //(This if statement needs to go INSIDE of the event listener! Here I will tell my video to appear if the event listern occurs, and be hidden by default
// function myFunction() {
//     tiktokEmbedDiv = document.getElementById("tiktokembed");
//     if (tiktokEmbedDiv.style.display === "none") {
//         tiktokEmbedDiv.style.display = "block";
//     } else {
//         tiktokEmbedDiv.style.display = "none";
//     }
//   }



//callback is a function, needs to be second argument



