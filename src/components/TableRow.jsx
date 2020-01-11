import React from "react";
import TableCell from "./TableCell";

function TableRow(props) {
	let element = [];
	for (let i = 0; i < props.numCols; ++i) {
		element.push(
			<TableCell
				row={props.row}
				col={i}
				colorArray={props.colorArray}
				handleClick={props.handleClick}
			/>
		);
	}

	return <tr>{element}</tr>;
}

export default TableRow;
