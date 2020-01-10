import React, { Component } from 'react';
import './App.css';
import {Table, TableRow, TableCell} from "./components"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      defaultColor : "#222222",
      currentColor : "#222222",
      colorArray : [],
      numRows: 2,
      numCols: 3
    }
  }

  componentDidMount = () => {
    const row = Array.from({length : this.state.numCols}).map(x => this.state.defaultColor);
    const array = Array.from({length : this.state.numRows}).map(x => row);
    this.setState({
      colorArray : array
    }, () => console.log(this.state.colorArray));
  }

  addRow = () => {
    const newRow = Array.from({length : this.state.numCols}).map(x => this.state.defaultColor);
    this.setState({
      numRows : this.state.numRows + 1,
      colorArray : this.state.colorArray.concat([newRow])
    }, () => console.log(this.state.colorArray))
  }

  addCol = () => {

  }

  removeRow = () => {
    if (this.state.numRows > 1) {
      let newArr = this.state.colorArray.slice(0, -1);
      this.setState({
        numRows : this.state.numRows - 1,
        colorArray : newArr
      }, () => console.log(this.state.colorArray));
    }
    else {
      alert("Minimum rows achieved");
    }
  }

  removeCol = () => {

  }

  updateSelectedColor = e => {
    this.setState({
      currentColor : e.target.value
    })
  }

  fillAll = () => {

  }

  clearAll = () => {

  }

  fillUncolored = () => {

  }


  render(){
    return (
      <div>
        <button onClick={this.addRow}>Add a row</button>
        <button onClick={this.addCol}>Add a col</button>
        <button onClick={this.removeRow}> Remove a row</button>
        <button onClick={this.removeCol}> Remove a row</button>

        <select value={this.state.currentColor} onChange={this.updateSelectedColor}>
          <option id="default" value="#222222">default</option>
          <option id="algae" value="#FFFFFF">algae</option>
        </select>

        <Table numRows={this.state.numRows} numCols={this.state.numCols}/>

        <button onClick={this.fillAll}>Fill all</button>
        <button onClick={this.clearAll}>Clear all</button>
        <button onClick={this.fillUncolored}>Fill only uncolored</button>

      </div>
    );
  }
}

export default App;
