const otherRecipes = ["https://www.nytimes.com", "https://www.washingtonpost.com", "http://www.economist.com"];


id="recipelinks"
function showList(array){
  const myDiv = document.getElementById("recipelinks");
  const myList = document.createElement("ol"); //creating the ol element
  myDiv.appendChild(myList);
  for(let i = 0; i < array.length; i++){
    let link = array[i];
    console.log(link);
    let newsLi = document.createElement("li"); // same as line 7, here we are creating an li element
    newsLi.innerHTML = `<a href=${link}> ${link} </a>`; //the li element i created on 12, can have innerText, or innerHTML -> they specify what goes inside li element (the actual text), innertext-> it prints out the literal angle brackets < >. innerHTML -> will treat those brackets as actual HTML.
    // a is anchor its putting a link on the page, href-> is the refrence for the link.
    // So esentially wht I am doing on line 13 is using innerHTML to add my link from the text in array[i]
    // first link is inside the href (where u want the link to go) and the second is in the anchor (what is clickable).
    myList.appendChild(newsLi);
  }
}

showList(otherRecipes);
// You dont always need to return a function!