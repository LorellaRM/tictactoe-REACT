import React from "react";
import { Modal } from "./initialPage.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Modal />
		</div>
	);
}
