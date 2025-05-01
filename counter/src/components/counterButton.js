import React, { Children }  from "react";
import './counterButton.css';

const counterButton=({onclick,Children})=>{
    return(
        <button className="btn" onClick={onclick}> {Children} </button>
    )
}

export default counterButton