import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

export function Game() {
    return (
        <div>
            <Square />
        </div>
    );
}

export function Square(props) {
return <button className = "squareClass" onClick = {props.onClick}> {props.value}</button>
}

export function Board() {
    const [boardSquare, setBoardSquare] = useState (Array(9).fill(null));
    const [xPlayer, setXPlayer] = useState(true);
    const handleClick = index => {
        const squares = [...boardSquare];
        if (squares[index])

    }
}
