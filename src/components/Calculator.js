import React, { Component } from "react";
import Display from "./Display";
import Keybord from "./Keybord";

class Calculator extends Component {
  state = {};
  render() {
    return (
      <div>
        <Display />
        <Keybord />
      </div>
    );
  }
}

export default Calculator;
