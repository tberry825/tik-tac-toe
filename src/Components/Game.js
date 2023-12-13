//Here I am importing the Board component to Game, and also importing the useState for the updating of the state variables. Game main function is the ability to view move history. 
import Board from "./Board";
import Form from "./Form";
import { useState } from "react";


function Game() {
    //state variables
    //xIsNext variable Represents whether it's "X" player's turn.
    //history keeps track of the game state history (array of arrays representing the board at each move).
    //Represents the index of the current move in history.
    const [xIsNext , setXIsNext ] = useState(true);
    const [history , setHistory ] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    
    //Initialize the component state using the useState hook. formData is an object that holds the form data, and setFormData is a function used to update the state.
    const [formData, setFormData] = useState({
        playerOne: "",
        playerTwo: "",
    });

    const [formSubmitted, setFormSubmitted] = useState(false); 

    //Define a function handleChange that updates the form data when input values change. It uses the spread operator (...) to create a copy of the previous state and update the specific field (name or email) based on the input element's name attribute.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData,  [name]: value });
    };

    //Define a function handleSubmit that prevents the default form submission behavior and logs the form data to the console. In a real-world scenario, you would typically send this data to a server or perform further actions.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, "Form submitted");
        setFormSubmitted(true);
    }

    // Get the current state of the board (squares) from history
    const currentSquares = history[history.length - 1]

     // Function to handle a player's move
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext)
        
        // line of code is updating the state variable history 
        setHistory([...history, nextSquares])       
    }

    // Function to jump to a specific move in history
    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
        setXIsNext(nextMove % 2 === 0); 
    }

    // This code is generating a list of buttons, each corresponding to a move in the game's history. The map method is called on the history array. It iterates over each element in the array, providing a callback function with two parameters: squares (the state of the board at that move) and move (the index of the move in the history).
    const moves = history.map((squares, move) => {
       
        //variable named description, that Inside the callback function, it determines the description for each move button.
        let description;
        //If move is greater than 0, it sets the description to "Go to move #" followed by the move number. If move is 0, it sets the description to "Go to game start."
        if (move > 0) {
            description = "Go to move #" + move
        }else{
            description = "Go to game start"     
        }
        //For each move, it returns a list item (<li>) containing a button (<button>).The key attribute is set to the move index to help React efficiently update and reorder the list items.The onClick attribute is set to a function that calls the jumpTo function with the move index when the button is clicked.The button's text content is set to the determined description.
        return (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>{description}</button>  
            </li>
        )
    })

    //this return is defining the UI structure for a tic-tac-toe game using React components. It includes a game board (Board component) and a section for displaying move history.
    return (
         <div className="game">
            <div className="game-board">
                <Board isNext={xIsNext} onPlay={handlePlay} squares={currentSquares}/>
            </div>
            <div className="game-info">
                <p>{moves}</p>
            </div>
            <Form 
                formData={formData}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
            />
            {/* Display names only if the form is submitted */}
            {formSubmitted && (
                <div>
                    <p>Player One: {formData.playerOne}</p>
                    <p>Player Two: {formData.playerTwo}</p>
                </div>
            )}
    
         </div>
    );
  }
  
  export default Game;