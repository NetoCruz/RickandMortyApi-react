import React, { Component } from "react";
import confLogo from "./images/rick.png";
import "./components/styles/Badge.css";
import PageLoading from "./components/PageLoading";

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
    if (this.state.loading === true) {
      return <PageLoading />;
    }
    return (
      // <div className="Badge">
      //   <div className="Badge__header">
      //     <img src={confLogo} alt="Logo de la conferencia" />
      //   </div>

      <header class="masthead bg-secondary text-white text-center">
        <div class="container">
          <img
            class="img-fluid mb-5 d-block mx-auto images"
            src={this.state.data.image}
            alt=""
          />
          <h1 class="text-uppercase mb-0">{this.state.data.name}</h1>
          <hr class="star-light" />
          <h2 class="font-weight-light mb-0">
            {this.state.data.status} - {this.state.data.gender} -
            {this.state.data.species}
          </h2>
        </div>
      </header>
    );
  }
}

export default Info;
