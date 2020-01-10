import React from "react";
import TableRow from "./TableRow";

function Table(props) {
  let element = [];
  for (let i = 0; i < props.numRows; ++i) {
    element.push(<TableRow numCols={props.numCols} />);
  }
  return <table>{element}</table>;
}

export default Table;
