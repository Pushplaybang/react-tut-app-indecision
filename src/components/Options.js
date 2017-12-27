import React from "react";
import { Option } from "./Option.js";

export class Options extends React.Component {
  renderOptions() {
    if (!this.props.options || this.props.options.length === 0)
      return (
        <p className="widget__message">
          please add some options to get started.
        </p>
      );

    return this.props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOne={this.props.handleDeleteOne}
      />
    ));
  }

  render() {
    return (
      <div>
        <div className="widget-header">
          <h3 className="widget-header__title">Your Options</h3>
          <button
            className="button button--link"
            onClick={this.props.handleDeleteOptions}
          >
            Remove All
          </button>
        </div>
        {this.renderOptions()}
      </div>
    );
  }
}
