import React from "react";

export const Option = props => (
  <div className="option">
    <p className="option__text">{props.optionText}</p>
    <button
      className="button button--link"
      onClick={event => props.handleDeleteOne(props.optionText)}
    >
      remove
    </button>
  </div>
);
