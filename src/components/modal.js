import React from "react";
import Modal from "react-modal";

export const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    appElement={document.getElementById("app")}
    onRequestClose={props.handleClearSelected}
    closeTimeoutMS={200}
    className="modal"
    style={{ overlay: { backgroundColor: "rgba(28, 20, 36, 0.9)" } }}
  >
    <h2 className="modal__title">Selected Item</h2>
    <p className="modal__body">{props.selectedOption}</p>
    <button className="button" onClick={props.handleClearSelected}>
      close
    </button>
  </Modal>
);
