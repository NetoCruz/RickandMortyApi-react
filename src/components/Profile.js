import React, { Component } from "react";
import "./styles/navbar.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import "./styles/Badge.css";
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
              <li className="grid-item profile" key={badge.id}>
                <Link to={`/characters/${badge.id}`}>
                  <img src={badge.image} />
                </Link>
                <div className="name__card">{badge.name}</div>
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
