import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [operator, setOperator] = useState("");

  const handleNumberClick = (number) => {
    setDisplayValue((prevValue) => prevValue + number);
  };

  const handleOperatorClick = (op) => {
    if (displayValue !== "") {
      const newValue = parseFloat(displayValue);
      if (currentValue === 0) {
        setCurrentValue(newValue);
      } else {
        calculate();
      }
      setOperator(op);
      setDisplayValue("");
    }
  };

  const calculate = () => {
    switch (operator) {
      case "+":
        setCurrentValue((prevValue) => prevValue + parseFloat(displayValue));
        break;
      case "-":
        setCurrentValue((prevValue) => prevValue - parseFloat(displayValue));
        break;
      case "*":
        setCurrentValue((prevValue) => prevValue * parseFloat(displayValue));
        break;
      case "/":
        setCurrentValue((prevValue) => prevValue / parseFloat(displayValue));
        break;
      default:
        break;
    }
  };

  const handleEqualsClick = () => {
    if (operator && displayValue !== "") {
      calculate();
      setOperator("");
      setDisplayValue("");
    }
  };

  const handleClearClick = () => {
    setDisplayValue("");
    setCurrentValue(0);
    setOperator("");
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display-clear">
         <input type="text" className="display" value={displayValue || currentValue} />
          <button onClick={() => handleClearClick()} className="clear">Clear</button>
        </div>
        <div className="buttons">
          <div className="row row-one">
            <button onClick={() => handleOperatorClick("+")}>+</button>
            <button onClick={() => handleEqualsClick()} className="equal">
              =
            </button>
          </div>
          <div className="row row-two">
            <button onClick={() => handleOperatorClick("*")}>*</button>
            <button onClick={() => handleOperatorClick("-")}>-</button>
            <button onClick={() => handleOperatorClick("/")}>/</button>
          </div>
          <div className="row row-three">
            <button onClick={() => handleNumberClick("1")}>1</button>
            <button onClick={() => handleNumberClick("2")}>2</button>
            <button onClick={() => handleNumberClick("3")}>3</button>
          </div>
          <div className="row row-four">
            <button onClick={() => handleNumberClick("4")}>4</button>
            <button onClick={() => handleNumberClick("5")}>5</button>
            <button onClick={() => handleNumberClick("6")}>6</button>
          </div>
          <div className="row row-five">
            <button onClick={() => handleNumberClick("7")}>7</button>
            <button onClick={() => handleNumberClick("8")}>8</button>
            <button onClick={() => handleNumberClick("9")}>9</button>
          </div>
          <div className="row row-six">
            <button onClick={() => handleNumberClick("0")}>0</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;