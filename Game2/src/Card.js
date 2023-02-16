import "./Card.css";
import { useState } from "react";

// In my prop I am only passing one number, 1-4 (shuffle the array at this instance)
//1= hamburger https://static.thenounproject.com/png/1142266-200.png
//2= corn https://static.thenounproject.com/png/1235197-200.png
//3= soup https://static.thenounproject.com/png/1242759-200.png
//4= movie theatre https://static.thenounproject.com/png/1340537-200.png

// back of card https://i.pinimg.com/736x/8b/d4/6f/8bd46fdd6a80707c24b891437a77e4bf.jpg
//States cannot be nested inside a function

function getCardImageByNum(cardNum) {
  if (cardNum === 1) {
    return "https://static.thenounproject.com/png/1142266-200.png";
  } else if (cardNum === 2) {
    return "https://static.thenounproject.com/png/1235197-200.png";
  } else if (cardNum === 3) {
    return "https://static.thenounproject.com/png/1242759-200.png";
  } else if (cardNum === 4) {
    return "https://static.thenounproject.com/png/1340537-200.png";
  }
}

//toggle here to update state for flipped variable and image state
function Card(props) {
  const [flipped, setFlipped] = useState(false);
  function flip() {
    if (flipped === true) {
    }
  }

  //Create a state variable which stores image link (just refrence function to get each link) image state:

  return (
    <button onClick={flip} className="cardcontainer">
      <div className="carddiv">
        <img
          className="cardimage"
          src={getCardImageByNum(props.cardnumber)} //if you need Javascript logic use curly braces! Otherwise its JSX
        />{" "}
      </div>
    </button>
  );
}

export default Card;
