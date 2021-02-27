import React, { Component } from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";

class Calculator extends Component {
  state = {};
  render() {
    return (
      <div>
        <Display />
        <Keyboard />
      </div>
    );
  }
}

export default Calculator;
