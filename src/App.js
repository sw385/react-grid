import React, { Component } from "react";
import "./App.css";
import { Table } from "./components";

class App extends Component {
	constructor(props) {
		super(props);

		const defaultColor = "default-color";
		const initialRow = 2;
		const initialCol = 3;
		// const row = Array.from({ length: initialCol }).map(x => defaultColor);
		const array = Array.from({ length: initialRow }).map(x =>
			Array.from({ length: initialCol }).map(x => defaultColor)
		);

		this.state = {
			defaultColor: defaultColor,
			currentColor: "red-color",
			colorArray: array
		};
		console.log(this.state.colorArray);
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

	fillAll = () => {
		let newArr = this.state.colorArray.map(row =>
			row.map(() => this.state.currentColor)
		);
		this.setState({
			colorArray: newArr
		});
	};

	clearAll = () => {
		let newArr = this.state.colorArray.map(row =>
			row.map(() => this.state.defaultColor)
		);
		this.setState({
			colorArray: newArr
		});
	};

	fillUncolored = () => {
		const { defaultColor, currentColor, colorArray } = this.state;
		let newArr = colorArray;
		for (let i = 0; i < colorArray.length; ++i) {
			for (let j = 0; j < colorArray[0].length; ++j) {
				if (newArr[i][j] === defaultColor) {
					newArr[i][j] = currentColor;
				}
			}
		}
		this.setState({
			colorArray: newArr
		});
	};

	handleClick = (row, col) => {
		const { currentColor, colorArray } = this.state;
		let newArr = colorArray;
		for (let i = 0; i < colorArray.length; ++i) {
			for (let j = 0; j < colorArray[0].length; ++j) {
				if (i === row && j === col) {
					console.log(i, j);
					newArr[i][j] = currentColor;
				}
			}
		}
		console.log(newArr);
		this.setState({
			colorArray: newArr
		});
	};

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
					<option id="default" value="default-color">
						default
					</option>
					<option id="red" value="red-color">
						red
					</option>
					<option id="green" value="green-color">
						green
					</option>
				</select>

				<Table
					numRows={this.state.colorArray.length}
					numCols={this.state.colorArray[0].length}
					colorArray={this.state.colorArray}
					handleClick={this.handleClick}
				/>

				<button onClick={this.fillAll}>Fill all</button>
				<button onClick={this.clearAll}>Clear all</button>
				<button onClick={this.fillUncolored}>Fill only uncolored</button>
			</div>
		);
	}
}

export default App;
