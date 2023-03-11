const Header = (props) => {
  let message;
  if (props.user) {
    message = `Welcome to the Science Trivia Game, ${props.user}!`;
  } else {
    message = `Welcome to the Science Trivia Game!`;
  }

  return (
    <div className={"textHeader"}>
      <img
        id="image"
        src="https://www.nicepng.com/png/full/14-148755_science-png-image-with-transparent-background-science-word.png"
      />
      <h3>{message}</h3>
    </div>
  );
};

export default Header;
