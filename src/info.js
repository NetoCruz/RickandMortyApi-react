import React, { Component } from "react";

class Info extends Component {
  state = {
    id: this.props.match.params.infoId,
    loading: true,
    error: null,
    data: {
      results: []
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        // `https://rickandmortyapi.com/api/character?id.read(this.props.match.params.infoId)`
        `https://rickandmortyapi.com/api/character/${parseInt(
          this.props.match.params.infoId
        )}`
      );

      const data = await response.json();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
    console.log(
      `https://rickandmortyapi.com/api/character/?id=${
        this.props.match.params.infoId
      }`
    );
  };

  render() {
    return (
      <div>
        Hooola
        {this.props.match.params.infoId}
        {this.state.data.name}
      </div>
    );
  }
}

export default Info;
