import React, { Component } from "react";

class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      players: []
    };
  }

  componentDidMount() {
    fetch(
      "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Kaptein%20Mordi?api_key=RGAPI-54a21b8e-eeb8-4f61-a905-15ac41ec8501"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            players: result.players
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, players } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <h1>{players}</h1>;
    }
  }
}

export default FetchData;
