import React, { Component } from "react";
import TheNavBar from "./navbar";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <ul>{<h4>Home</h4>}</ul>
        </main>
        <TheNavBar />
      </React.Fragment>
    );
  }
}
export default Home;
