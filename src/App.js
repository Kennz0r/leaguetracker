import "./App.css";
import React, { Component } from "react";
import NavBar from "./navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  apiKey = "?api_key=RGAPI-cc88b223-bcd2-40b4-8139-eb774bc20c07";
  proxyurl = "https://cors-anywhere.herokuapp.com/";
  url =
    "lol/league/v4/entries/by-summoner/e2RHuRTszUqmghmoOKaZQ_oKSLse53-cFfPB-VtfqkGYOVo";

  componentDidMount() {
    fetch(this.url, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
        "Accept-Language":
          "nb-NO,nb;q=0.9,no;q=0.8,nn;q=0.7,en-US;q=0.6,en;q=0.5,pt;q=0.4,pl;q=0.3",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        Origin: "https://developer.riotgames.com",
        "X-Riot-Token": "RGAPI-cc88b223-bcd2-40b4-8139-eb774bc20c07",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });
          //console.log(this.state.items);
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
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <NavBar />
          <main className="container">
            <ul>
              {items.map(item => (
                <li key={item.leagueId}>
                  {item.queueType} {item.summonerName}
                </li>
              ))}
            </ul>
          </main>
        </React.Fragment>
      );
    }
  }
}
export default App;
