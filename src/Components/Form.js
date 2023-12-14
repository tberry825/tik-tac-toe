
// import { useState } from "react";

function Form({ formData, onInputChange, onSubmit }) {
  

    return (
      <div className="form">
        <form onSubmit={onSubmit}>
            <div className="inputWrapper">
                <label>Player 1:</label>
                    <input
                    type="text"
                    name="playerOne"
                    value={formData.playerOne}
                    onChange={onInputChange}
                    />
            </div>
            <div className="inputWrapper">
                <label>Player 2:</label>
                    <input
                    type="text"
                    name="playerTwo"
                    value={formData.playerTwo}
                    onChange={onInputChange}
                    />
            </div>
            <br />
                <button type="submit">Submit</button>
        </form>
     
      </div>
    );
  }
  
  export default Form;