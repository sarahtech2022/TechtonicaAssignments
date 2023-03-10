const Header = (props) => {
  let message;
  if (props.user) {
    message = `Welcome to the Science Trivia Game, ${props.user}!`;
  } else {
    message = `Welcome to the Science Trivia Game`;
  }

  return (
    <div className={"textHeader"}>
      <h3>{message}</h3>
    </div>
  );
};

export default Header;
