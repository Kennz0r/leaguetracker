import React, { Component } from "react";
import TheNavBar from "./navbar";

class Champions extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <ul>{<h4>Champions</h4>}</ul>
        </main>
        <TheNavBar />
      </React.Fragment>
    );
  }
}
export default Champions;
