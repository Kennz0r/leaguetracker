import "./App.css";
import React, { Component } from "react";
import TheNavBar from "./navbar";

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      search: "",
      query: "Zkillz0r",
    };
  }

  //old url : "lol/league/v4/entries/by-summoner/KxWBnrOrJ2DB0yXNTrMCTLr7INQ2-Vijg52T6kWqyc38SHc";
  proxyurl = "https://cors-anywhere.herokuapp.com/";
  url = "lol/summoner/v4/summoners/by-name/";

  componentDidMount() {
    fetch(this.url + this.state.query, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
        "Accept-Language":
          "nb-NO,nb;q=0.9,no;q=0.8,nn;q=0.7,en-US;q=0.6,en;q=0.5,pt;q=0.4,pl;q=0.3",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        Origin: "https://developer.riotgames.com",
        "X-Riot-Token": "RGAPI-bb1614fb-7780-49b3-a85c-8e50f0a4c22c",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result,
            //summonerName: result[0].summonerName,
            id: result.id,
          });
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    var { error, isLoaded, search } = this.state;
    const getSearch = (e) => {
      e.preventDefault();

      this.setState({
        query: search,
      });
      this.componentDidMount();
    };
    const updateSearch = (e) => {
      this.setState({
        search: e.target.value,
      });
    };

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return null;
    } else {
      return (
        <React.Fragment>
          <main className="container">
            <ul>
              {
                <h4>
                  id: {this.state.id} <br />
                  query: {this.state.search}
                </h4>
              }
            </ul>
          </main>
          <TheNavBar />
          <form className="form-inline" id="test">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Summoner"
              aria-label="Search"
              value={this.state.search}
              onChange={updateSearch}
            ></input>
            <button
              onClick={getSearch}
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </React.Fragment>
      );
    }
  }
}

export default Players;
