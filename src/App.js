import React, { Component } from 'react';
import './App.css';
import FoodPicker from './FoodPicker/FoodPicker';
import Clock from './Clock/Clock';
import Board from './Board/Board';
import Counter from './Counter/Counter';
import Car from './Car/Car';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      carColor: ''
    };
    this.changeCarColor = this.changeCarColor.bind(this);
    this.changeSecond = this.changeSecond.bind(this);
  }
  changeCarColor(newColor) {
    this.setState({ carColor: newColor });
  }
  changeSecond() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }
  componentWillMount() {
    setInterval(this.changeSecond, 1000);
  }
  render() {
    return (
      <div className="App" >
        <FoodPicker />

        <hr />

        <Clock time={this.state.time} />

        <hr />

        <Board />

        <hr />

        <Counter />

        <hr />

        <Car onChange={this.changeCarColor} carColor={this.state.carColor} />

        <hr />
      </div>
    );
  }
}

export default App;
