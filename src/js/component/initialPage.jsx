import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

export function Modal() {
	/**
	 *  Using the useState hook, you have to pay atention to 3 elements:
	 *  - opened: a variable that will change over time (can have any name)
	 *  - setOpened:  a function that resets the value of opened (can by any name)
	 *  - useState: this is the hook, it has to be setState and it receives the initial value for "opened"
	 */
	const [opened, setOpened] = useState(true);

	//if opened === true, I show the modal, else i show the button to open the modal
	return opened ? (
		<div>
			<h1>Pick a Weapon</h1>
			<div className="container mt-4">
				<p>
					<span>CHOOSE YOUR WEAPON</span>
				</p>
				<div className="d-flex p-2">
					<input
						type="text"
						className="form-control m-3"
						placeholder="Player X"
					/>
					<input
						type="text"
						className="form-control m-3"
						placeholder="Player O"
					/>
				</div>
				<div className="btn">
					<button
						className="mr-2 m-3"
						type="button"
						onClick={() => setOpened(false)}>
						<p>X</p>
					</button>
					<button type="button" onClick={() => setOpened(false)}>
						<p>O</p>
					</button>
				</div>
			</div>
		</div>
	) : (
		<button type="button" onClick={() => setOpened(true)}>
			Start Over
		</button>
	);
}
