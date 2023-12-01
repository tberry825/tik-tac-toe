//This is a React functional component named Square. It takes a single argument props, which stands for properties. React components can receive data through props, allowing them to be customizable and reusable.

function Square(props) {
     // in my return I am using JSX to house a div with the className of square (for CSS styling), that has an onClick event handler set to the props.onSquareClick , which is a function that will be called when the user clicks the button and will display whatever the value of props.value is.
    return (
         <div className="square" onClick={props.onSquareClick}>{props.value}</div>
    );
  }
  
  export default Square;