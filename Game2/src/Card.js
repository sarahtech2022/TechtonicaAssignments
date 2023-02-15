import './Card.css' 


function Card(props){
    return(
    <div className="cardcontainer">
    <div className="carddiv"><img className="cardimage" src={props.image}/> </div> 
    </div>
    )
}; 

export default Card;