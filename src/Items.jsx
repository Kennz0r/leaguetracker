import React, { Component } from "react";
import TheNavBar from "./navbar";

class Items extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <ul>{<h4>Items</h4>}</ul>
        </main>
        <TheNavBar />
      </React.Fragment>
    );
  }
}
export default Items;
