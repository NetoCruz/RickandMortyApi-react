import React, { Component } from "react";
import Profile from "./Profile";
import Modal from "./Modal";
import PageLoading from "./PageLoading";

class Personajes extends Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      results: []
    },
    modalIsOpen: false
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
      console.log(data);
    } catch (error) {
      this.setState({ loading: false, error: true });
    }
  };
  render() {
    console.log(this.state.data.results);
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    return (
      <div>
        <Profile
          onOpen={this.handleOpenModal}
          character={this.state.data.results}
        />
        <button className="btn btn-primary" onClick={() => this.fetchData()}>
          Load More
        </button>
        <Modal
          data={this.state.data}
          onClose={this.handleCloseModal}
          isOpen={this.state.modalIsOpen}
        />
      </div>
    );
  }
}

export default Personajes;
