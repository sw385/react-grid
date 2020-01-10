import React from "react";

function TableCell(props) {
	const colorClass = props.colorArray[props.row][props.col];
	return (
		<td
			className={colorClass}
			onClick={() => props.handleClick(props.row, props.col)}
		>
			cell
		</td>
	);
}

export default TableCell;
