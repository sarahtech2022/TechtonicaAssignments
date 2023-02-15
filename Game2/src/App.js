import logo from './logo.svg';
import './App.css';
import Card from './Card';

//List of pictures for cards
const arrayOfPics = ["https://static.thenounproject.com/png/1142266-200.png",
"https://static.thenounproject.com/png/1235197-200.png",
"https://static.thenounproject.com/png/1242759-200.png",
"https://static.thenounproject.com/png/1340537-200.png"];

//Gives me a number 0 to 3. 
//Give each card a random number, and arrange the cards by
// 0-7 placement, so each time the card goes in a new place.
// Return an array with 8 elements, with values 0-3, each number should 
//be repeated twice and in a random order

onclick = function(){return randomArray Math.floor(Math.random() * 4 );
};

{/* <button onclick="myFunction()">Click me</button> */}

function App() {
  return (
    <div id="mainAppDiv" className="App">
      
      <Card image={arrayOfPics[1]} />
      <Card image={arrayOfPics[0]}/>
      <Card image={arrayOfPics[3]}/>
      <Card image={arrayOfPics[2]} />
      <Card image={arrayOfPics[1]} />
      <Card image={arrayOfPics[2]} />
      <Card image={arrayOfPics[0]}/>
      <Card image={arrayOfPics[3]}/>

    </div>
  );
}

export default App;
