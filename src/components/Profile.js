import React, { Component } from "react";
import "./styles/navbar.css";
import Modal from "./Modal";
class Profile extends Component {
  state = {
    // modalIsOpen: false
  };

  // handleOpenModal = e => {
  //   this.setState({ modalIsOpen: true });
  // };

  // handleCloseModal = e => {
  //   this.setState({ modalIsOpen: false });
  // };
  render() {
    return (
      <div>
        <ul className="grid-container">
          {this.props.character.map(badge => {
            return (
              <li className="grid-item" key={badge.id}>
                <img src={badge.image} />
                <div className="name__card">
                  {badge.name}
                  <button id={badge.id} onClick={this.props.onOpen}>
                    Modal
                  </button>
                </div>
                {/* <Modal
                  onClose={this.handleCloseModal}
                  isOpen={this.state.modalIsOpen}
                  name={badge.name}
                /> */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Profile;
