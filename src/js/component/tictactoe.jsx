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
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

export function Board() {
	const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	const handleClick = index => {
		const squares = [...boardSquares];
		if (calculateWinner(boardSquares) || squares[index]) return;

		squares[index] = xIsNext ? "X" : "O";
		setBoardSquares(squares);

		setXIsNext(!xIsNext);
	};

	const renderSquare = index => {
		return (
			<Square
				value={boardSquares[index]}
				onClick={() => handleClick(index)}
			/>
		);
	};

	// let status;
	// const winner = calculateWinner(boardSquares);
	// status = winner ? { winner } : xIsNext ? "X" : "O";

	const winner = calculateWinner(boardSquares);
	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
	}

	return (
		<div>
			<div className="status">{status}</div>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
}

export function calculateWinner(squares) {
	const winningLines = [
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

	for (let i = 0; i < winningLines.length; i++) {
		const [a, b, c] = winningLines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[b] === squares[c]
		) {
			return squares[a];
		}
	}
}

Square.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func
};
