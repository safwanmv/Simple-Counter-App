import React from "react";
import './counterButton.css';

const CounterButton= ({ onClick , children }) => {
    return (
        <button className="btn" onClick={onClick}> { children} </button>
    );
};

export default CounterButton;