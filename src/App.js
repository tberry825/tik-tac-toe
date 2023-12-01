//Here I am importing the Game component to App so I can render Game to the screen, I am also importing App.css, so the styles I give will be applied where needed
import Game from './Components/Game';
import './App.css';


function App() {
  //I have a return here that houses a div (with a className if App for css styling), only one(1) div is allowed, but can house other elements along with divs. this div renders the Game component to the screen.  
  return (
    <div className="App">
     <Game />
    </div>
  );
}

export default App;

