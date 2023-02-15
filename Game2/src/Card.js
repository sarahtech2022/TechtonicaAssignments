import './Card.css' 

// In my prop I am only passing one number, 1-4 (shuffle the array at this instance)
//1= hamburger https://static.thenounproject.com/png/1142266-200.png
//2= corn https://static.thenounproject.com/png/1235197-200.png
//3= soup https://static.thenounproject.com/png/1242759-200.png
//4= movie theatre https://static.thenounproject.com/png/1340537-200.png


function Card(props){
    if (props.cardnumber === 1){
        return(
            <div className="cardcontainer">
    <div className="carddiv"><img className="cardimage" src="https://static.thenounproject.com/png/1142266-200.png"/> </div> 
    </div>
        )

    }else if (props.cardnumber === 2){
        return(
            <div className="cardcontainer">
    <div className="carddiv"><img className="cardimage" src="https://static.thenounproject.com/png/1235197-200.png"/> </div> 
    </div>
        )
}else if (props.cardnumber === 3){
    return(
        <div className="cardcontainer">
<div className="carddiv"><img className="cardimage" src="https://static.thenounproject.com/png/1235197-200.png"/> </div> 
</div>
    )
}else if (props.cardnumber === 2){
        return(
            <div className="cardcontainer">
    <div className="carddiv"><img className="cardimage" src="https://static.thenounproject.com/png/1235197-200.png"/> </div> 
    </div>
        )
}else {
    return(
        <div className="cardcontainer">
<div className="carddiv"><img className="cardimage" src="https://static.thenounproject.com/png/1235197-200.png"/> </div> 
</div>
    ) 
}
}

function WinMessage(props) {
    let win = "The winner is Heads!";
    let lose = "The Winner is Tails!";
    if (props.coin === 0) {
      return <p> {win} </p>;
    } else if (props.coin === 1) {
      return <text> {lose} </text>;
    } else {
      return <p>You have not flipped the coin yet </p>;
    }
  }



function Card(props){
    return(
    <div className="cardcontainer">
    <div className="carddiv"><img className="cardimage" src={props.image}/> </div> 
    </div>
    )
}; 

export default Card;