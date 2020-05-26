import React, { Component } from 'react';
import './Board.css';

/**
 * There are 3 boards. They all have a blue border.
 * Your task:
 * When clicking on one of the boards, the following should happen:
 * 1. The board you clicked on should have a red border color
 * 2. The other boards will return to their usual color (blue).
 */


class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isRed: [false, false, false]
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(index) {
		// console.log(index);
		// this.setState({ isRed: [...this.state.isRed, true] });
	}
	render() {
		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards">
					<div className='Board-option' onClick={this.handleClick(0)}> 1 </div>
					<div className='Board-option' onClick={this.handleClick(1)}> 2 </div>
					<div className='Board-option' onClick={this.handleClick(2)}> 3 </div>
				</div>
			</div>
		);
	}
}

export default Board;