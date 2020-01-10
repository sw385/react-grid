import React, { Component } from "react";
import "./App.css";
import { Table } from "./components";

class App extends Component {
	constructor(props) {
		super(props);

		const defaultColor = "#222222";
		const initialRow = 2;
		const initialCol = 3;
		const row = Array.from({ length: initialCol }).map(x => defaultColor);
		const array = Array.from({ length: initialRow }).map(x => row);

		this.state = {
			defaultColor: defaultColor,
			currentColor: "#222222",
			colorArray: array
		};
	}

	addRow = () => {
		const newRow = Array.from({ length: this.state.colorArray[0].length }).map(
			x => this.state.defaultColor
		);
		this.setState(
			{
				colorArray: this.state.colorArray.concat([newRow])
			},
			() => console.log(this.state.colorArray)
		);
	};

	addCol = () => {
		let newArr = this.state.colorArray.map(row => {
			return row.concat(this.state.defaultColor);
		});
		this.setState({
			colorArray: newArr
		});
	};

	removeRow = () => {
		if (this.state.colorArray.length > 1) {
			let newArr = this.state.colorArray.slice(0, -1);
			this.setState(
				{
					colorArray: newArr
				},
				() => console.log(this.state.colorArray)
			);
		} else {
			alert("Minimum rows achieved");
		}
	};

	removeCol = () => {
		if (this.state.colorArray[0].length > 1) {
			let newArr = this.state.colorArray.map(row => {
				return row.slice(0, -1);
			});
			this.setState({
				colorArray: newArr
			});
		} else {
			alert("Minimum cols achieved");
		}
	};

	updateSelectedColor = e => {
		this.setState({
			currentColor: e.target.value
		});
	};

	fillAll = () => {};

	clearAll = () => {};

	fillUncolored = () => {};

	render() {
		return (
			<div>
				<button onClick={this.addRow}>Add a row</button>
				<button onClick={this.addCol}>Add a col</button>
				<button onClick={this.removeRow}> Remove a row</button>
				<button onClick={this.removeCol}> Remove a col</button>

				<select
					value={this.state.currentColor}
					onChange={this.updateSelectedColor}
				>
					<option id="default" value="#222222">
						default
					</option>
					<option id="algae" value="#FFFFFF">
						algae
					</option>
				</select>

				<Table
					numRows={this.state.colorArray.length}
					numCols={this.state.colorArray[0].length}
				/>

				<button onClick={this.fillAll}>Fill all</button>
				<button onClick={this.clearAll}>Clear all</button>
				<button onClick={this.fillUncolored}>Fill only uncolored</button>
			</div>
		);
	}
}

export default App;
