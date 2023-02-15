import logo from './logo.svg';
import './App.css';
import Card from './Card';

//List of pictures for cards
const arrayOfPics = ["https://static.thenounproject.com/png/1142266-200.png",
"https://static.thenounproject.com/png/1235197-200.png",
"https://static.thenounproject.com/png/1242759-200.png",
"https://static.thenounproject.com/png/1340537-200.png"];

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
