import React from "react";

export class AddOption extends React.Component {
  state = {
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));

    if (!error) event.target.elements.option.value = "";
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleSubmit}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button" type="submit">
            Add Option
          </button>
        </form>
      </div>
    );
  }
}
