import React, { Component } from "react";
import "./App.css";
import { Table } from "./components";

class App extends Component {
	constructor(props) {
		super(props);

		// initialize an array of shades of gray and green, with more instances of lighter shades
		const defaultColor = "solitude-color";
		const initialRow = 7;
		const initialCol = 30;
		// const row = Array.from({ length: initialCol }).map(x => defaultColor);
		const colorPalette = ["solitude-color", "sulu-color", "mantis-color", "forest-color", "crusoe-color"];
		let colorProportion = ["solitude-color", "sulu-color", "mantis-color", "solitude-color", "sulu-color", "mantis-color"];
		for (let i = 0; i < colorPalette.length; ++i) {
			for (let j = 0; j <= i*i; ++j) {
				colorProportion.push(colorPalette[colorPalette.length - 1 - i])
			}
		}
		// console.log(colorProportion);

		// from the array of colors in proportion, randomly select colors to populate the inital array
		const array = Array.from({ length: initialRow }).map(x =>
			// Array.from({ length: initialCol }).map(x => defaultColor)
			Array.from({ length: initialCol }).map(x => colorProportion[Math.floor(Math.random() * colorProportion.length)])
		);

		this.state = {
			defaultColor: defaultColor,
			currentColor: "mantis-color",
			colorArray: array
		};
		// console.log(this.state.colorArray);
	}

	addRow = () => {
		const newRow = Array.from({ length: this.state.colorArray[0].length }).map(
			x => this.state.defaultColor
		);
		this.setState(
			{
				colorArray: this.state.colorArray.concat([newRow])
			},
			// () => console.log(this.state.colorArray)
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
				// () => console.log(this.state.colorArray)
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
					// console.log(i, j);
					newArr[i][j] = currentColor;
				}
			}
		}
		// console.log(newArr);
		this.setState({
			colorArray: newArr
		});
	};

	render() {
		return (
			<div id="parent-container">
				<h1>ReactJS Grid</h1>
				<h3>by Kun Yu, Darren Zhang, and Samson Wu</h3>

				<span>
					<button onClick={this.addRow}>Add a row</button>
					<button onClick={this.removeRow}> Remove a row</button>
					<button onClick={this.addCol}>Add a column</button>
					<button onClick={this.removeCol}> Remove a column</button>
					
					<label>Select color:</label>
					<select
						value={this.state.currentColor}
						onChange={this.updateSelectedColor}
					>
						<option id="solitude" value="solitude-color">
							Solitude
						</option>
						<option id="sulu" value="sulu-color">
							Sulu
						</option>
						<option id="mantis" value="mantis-color">
							Mantis
						</option>
						<option id="forest" value="forest-color">
							Forest
						</option>
						<option id="crusoe" value="crusoe-color">
							Crusoe
						</option>
						<option id="blue" value="blue-color">
							Blue
						</option>
						<option id="green" value="green-color">
							Green
						</option>
						<option id="yellow" value="yellow-color">
							Yellow
						</option>
						<option id="orange" value="orange-color">
							Orange
						</option>
						<option id="red" value="red-color">
							Red
						</option>
					</select>
					<div id="preview" class={this.state.currentColor}></div>
				</span>

				<Table
					numRows={this.state.colorArray.length}
					numCols={this.state.colorArray[0].length}
					colorArray={this.state.colorArray}
					handleClick={this.handleClick}
				/>

				<button onClick={this.fillAll}>Fill all</button>
				<button onClick={this.clearAll}>Clear all</button>
				<button onClick={this.fillUncolored}>Fill only uncolored</button>

				<h4>Color names by <a href="https://www.color-blindness.com/color-name-hue/">Color Name & Hue</a></h4>
			</div>
		);
	}
}

export default App;
