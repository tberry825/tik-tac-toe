import Board from "./Board";
import { useState } from "react";


function Game() {
    const [xIsNext , setXIsNext ] = useState(true);
    const [history , setHistory ] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[history.length - 1]

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext)
        
        setHistory([...history, nextSquares])
        
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
        setXIsNext(nextMove % 2 === 0); 
    }

    const moves = history.map((squares, move) => {
        // console.log(history);
        let description;
        if (move > 0) {
            description = "Go to move #" + move
        }else{
            description = "Go to game start"     
        }

        return (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>{description}</button>  
            </li>
        )
    })


    return (
         <div className="game">
            <div className="game-board">
                <Board isNext={xIsNext} onPlay={handlePlay} squares={currentSquares}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
         </div>
    );
  }
  
  export default Game;