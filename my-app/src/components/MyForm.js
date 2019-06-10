import React, { Component } from "react";

export default class MyForm extends Component {
  state = {
    name: "your name",
    favoritePet: "",
    rememberMe: false,
    title: "Mr"
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleChange2 = event => {
    this.setState({ favoritePet: event.target.value });
  };

  handleCheck = event => {
    this.setState({ rememberMe: event.target.checked });
  };

  handleSelect = event => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = event => {
    console.log(this.state);
  };

  render() {
    console.log(this.state.name);
    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange} />
        <textarea
          value={this.state.favoritePet}
          onChange={this.handleChange2}
        />

        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleCheck}
        />
        <div>
          <select value={this.state.title} onChange={this.handleSelect}>
            <option>Mr.</option>
            <option>Miss.</option>
            <option>ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}
