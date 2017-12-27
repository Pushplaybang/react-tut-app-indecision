import React from "react";

import { Header } from "./Header.js";
import { Action } from "./Action.js";
import { Options } from "./Options.js";
import { AddOption } from "./AddOption.js";
import { OptionModal } from "./Modal.js";

export class InDecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: ""
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOne = option => {
    this.setState(prevState => ({
      options: prevState.options.filter(test => test !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    this.setState(prevState => ({
      selectedOption: this.state.options[randomNum]
    }));
  };

  handleClearSelected = () => {
    this.setState(prevState => ({
      selectedOption: ""
    }));
  };

  handleAddOption = option => {
    if (!option) return "Enter a valid value";
    if (this.state.options.includes(option)) return "already exists";

    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  };

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (!options) return;

      this.setState(() => ({ options }));
    } catch (error) {
      console.error(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length === this.state.options.length) return;

    localStorage.setItem("options", JSON.stringify(this.state.options));
    localStorage.getItem("options");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const title = "InDecision";
    const subTitle = "Put Your Life in the Hands of a Computer";

    return (
      <div>
        <Header subTitle={subTitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOne={this.handleDeleteOne}
            />
            <AddOption handleAddOption={this.handleAddOption} />
            <OptionModal
              selectedOption={this.state.selectedOption}
              handleClearSelected={this.handleClearSelected}
            />
          </div>
        </div>
      </div>
    );
  }
}
