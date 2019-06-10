import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0
  };

  componentWillUnmount() {
    console.log("unmointing...");
  }

  componentDidMount() {
    console.log("mounting...");
  }

  handleButtonClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleButtonClick2 = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    console.log("render func");
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={this.handleButtonClick2}>decrement</button>
        <button onClick={this.handleButtonClick}>increment</button>
      </div>
    );
  }
}
