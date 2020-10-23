import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

export function Game() {
	return (
		<div>
			<Board />
		</div>
	);
}

export function Square(props) {
	return (
		<button className="squareClass" onClick={props.onClick}>
			{" "}
			{props.value}
		</button>
	);
}

export function Board() {
	const [boardSquare, setBoardSquare] = useState(Array(9).fill(null));
	const [xPlayer, setXPlayer] = useState(true);
	const handleClick = index => {
		const squares = [...boardSquare];
		if (calculateWinner(boardSquare) || squares[index]) return;
		squares[index] = xPlayer ? "X" : "O";
		setBoardSquare(squares);
		setXPlayer(!xPlayer);
	};

	const renderSquare = index => {
		return (
			<Square
				value={boardSquare[index]}
				onClick={() => handleClick(index)}
			/>
		);
	};

	let status = xPlayer ? "X" : "O";
	const winner = calculateWinner(boardSquare);

	function GetStatus() {
		if (winner) {
			return "The Winner is: " + winner;
		} else {
			return "Siguiente jugador: " + xPlayer;
		}
	}

	return (
		<div>
			<div>
				{" "}
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div>
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div>
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
}

function calculateWinner(squares) {
	const winnerLines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i < winnerLines.length; i++) {
		const [a, b, c] = winnerLines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[b] === squares[c]
		) {
			return squares[a];
		}
		return null;
	}
}

Square.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.string
};
