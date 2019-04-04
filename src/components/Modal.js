import React from "react";
import ReactDOM from "react-dom";
import "./styles/modal.css";

class Modal extends React.Component {
  state = {
    data: {
      results: []
    },
    modalIsOpen: false
  };

  componentDidMount() {
    this.setState({ data: this.props.data.results });
  }
  render() {
    if (!this.props.isOpen) {
      return null;
    }
    return ReactDOM.createPortal(
      <div className="Modal">
        <div className="Modal__container">
          <button claasName="Modal__close-button" onClick={this.props.onClose}>
            X
          </button>
          <div />
          <div>{console.log(this.props.data.results)}</div>
          <div />
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}
export default Modal;
