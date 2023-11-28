

function Square(props) {
 


   

    return (
         <div className="square" onClick={props.onSquareClick}>{props.value}</div>
    );
  }
  
  export default Square;