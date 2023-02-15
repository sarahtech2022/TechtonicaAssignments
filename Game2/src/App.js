import logo from './logo.svg';
import './App.css';
import Card from './Card';

//List of pictures for cards
const arrayOfPics = ["https://static.thenounproject.com/png/1142266-200.png",
"https://static.thenounproject.com/png/1235197-200.png",
"https://static.thenounproject.com/png/1242759-200.png",
"https://static.thenounproject.com/png/1340537-200.png"];

// De-facto unbiased Shuffle Algorithm (Fisher-Yates Shuffle)
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
// Used like so
let shuffledCardsArray = [1,2,3,4,1,2,3,4];
shuffle(shuffledCardsArray);
console.log(shuffledCardsArray);

//1= hamburger https://static.thenounproject.com/png/1142266-200.png
//2= corn https://static.thenounproject.com/png/1235197-200.png
//3= soup https://static.thenounproject.com/png/1242759-200.png
//4= movie theatre https://static.thenounproject.com/png/1340537-200.png







function App() {
  return (
    <div id="mainAppDiv" className="App">
      
      <Card cardnumber={shuffledCardsArray[0]} />
      <Card cardnumber={shuffledCardsArray[1]}/>
      <Card cardnumber={shuffledCardsArray[2]}/>
      <Card cardnumber={shuffledCardsArray[3]} />
      <Card cardnumber={shuffledCardsArray[4]} />
      <Card cardnumber={shuffledCardsArray[5]} />
      <Card cardnumber={shuffledCardsArray[6]}/>
      <Card cardnumber={shuffledCardsArray[7]}/>

    </div>
  );
}

export default App;
