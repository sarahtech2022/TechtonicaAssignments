import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

//List of pictures for cards
const arrayOfPics = [
  "https://static.thenounproject.com/png/1142266-200.png",
  "https://static.thenounproject.com/png/1235197-200.png",
  "https://static.thenounproject.com/png/1242759-200.png",
  "https://static.thenounproject.com/png/1340537-200.png",
];

// De-facto unbiased Shuffle Algorithm (Fisher-Yates Shuffle)
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
// Used like so
let shuffledCardsArray = [1, 2, 3, 4, 1, 2, 3, 4];
shuffle(shuffledCardsArray);
console.log(shuffledCardsArray);

//1= hamburger https://static.thenounproject.com/png/1142266-200.png
//2= corn https://static.thenounproject.com/png/1235197-200.png
//3= soup https://static.thenounproject.com/png/1242759-200.png
//4= movie theatre https://static.thenounproject.com/png/1340537-200.png

//I need to tell card instance that if youre clicked on you should use that function on card component
//You can only hve two cards clicked on at once.
//Spoiler, we will need to use state.
//The state will need to exist inside the app component.
//Create a new state inside of app, that holds card 1 and card 2 (2 parking lot spaces)- holding which two cards are flipped
//You will have to essentially add a new prop to card called flipped,
//Instrad of tracking flipped inside of the card as a state, u will want to have that state inside App
//In the end card will not have a flipped state in the end.
// -1 for null for the default, -1 index is invalid! so that no 2 cards are selected as the default

function App() {
  //const [twoCard, setTwoCard] = useState(-1);
  return (
    <div id="mainAppDiv" className="App">
      <h1 style={{ textAlign: "center" }}>Card Game</h1>
      <Card cardnumber={shuffledCardsArray[0]} />
      <Card cardnumber={shuffledCardsArray[1]} />
      <Card cardnumber={shuffledCardsArray[2]} />
      <Card cardnumber={shuffledCardsArray[3]} />
      <Card cardnumber={shuffledCardsArray[4]} />
      <Card cardnumber={shuffledCardsArray[5]} />
      <Card cardnumber={shuffledCardsArray[6]} />
      <Card cardnumber={shuffledCardsArray[7]} />
    </div>
  );
}

export default App;
