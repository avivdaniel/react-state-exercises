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
		this.ChangeColorClass = this.ChangeColorClass.bind(this);
	}
	handleClick(e) {
		const index = parseInt(e.target.innerHTML) - 1;
		let { isRed } = this.state;
		isRed = isRed.map(option => {
			return option = false;
		})
		isRed[index] = !isRed[index];
		this.setState({ isRed: [...isRed] });
	}
	ChangeColorClass(index) {
		const color = !this.state.isRed[index] ? 'Board-option' : 'Board-selected';
		return color;

	}
	render() {
		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards">

					<div className={this.ChangeColorClass(0)} onClick={e => this.handleClick(e)}> 1 </div>
					<div className={this.ChangeColorClass(1)} onClick={e => this.handleClick(e)}> 2 </div>
					<div className={this.ChangeColorClass(2)} onClick={e => this.handleClick(e)}> 3 </div>
				</div>
			</div>
		);
	}
}

export default Board;