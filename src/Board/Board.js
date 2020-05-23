import React, { Component } from 'react';
import './Board.css';

/**
 * There are 3 boards. They all have a blue border.
 * Your task:
 * When clicking on one of the boards, the following should happen:
 * 1. The board you clicked on should have a red border color
 * 2. The other boards will return to their usual color (blue).
 */

// class Board extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { BoardBorderColor: 'Board-option' };
// 		this.handleBoardColorChange = this.handleBoardColorChange.bind(this);
// 	}
// 	handleBoardColorChange() {
// 		this.state.BoardBorderColor === 'Board-option' ? this.setState({ BoardBorderColor: 'Board-selected' }) : this.setState({ BoardBorderColor: 'Board-option' });
// 	}
// 	render() {
// 		return (
// 			<div className="Board">
// 				<h1>Choose board:</h1>
// 				<div className="boards">
// 					<div className={this.state.BoardBorderColor} onClick={this.handleBoardColorChange}>1</div>
// 					<div className={this.state.BoardBorderColor} onClick={this.handleBoardColorChange}>2</div>
// 					<div className={this.state.BoardBorderColor} onClick={this.handleBoardColorChange}>3</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			BoardBorderColor: 'Board-option'
		}
	}
	handleClick() {
		this.setClassName();
	}
	setClassName() {

	}
	render() {
		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards">
					<div className='Board-option'> 1 </div>
					<div className='Board-option'> 2 </div>
					<div className='Board-option'> 3 </div>
				</div>
			</div>
		);
	}
}

export default Board;