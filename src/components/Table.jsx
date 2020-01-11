import React from "react";
import TableRow from "./TableRow";

function Table(props) {
	let element = [];
	for (let i = 0; i < props.numRows; ++i) {
		element.push(
			<TableRow
				numCols={props.numCols}
				row={i}
				colorArray={props.colorArray}
				handleClick={props.handleClick}
			/>
		);
	}
	return <table>{element}</table>;
}

export default Table;
