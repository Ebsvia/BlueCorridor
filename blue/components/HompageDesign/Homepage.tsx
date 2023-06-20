import { relative } from "path";
import React, { Component } from "react";

export class Homepage extends Component {
  render() {
    return (
      <>
        <div
          style={{
            fontSize: 40,
            textAlign: "center",
            position: "relative",
            top: 60,
          }}
        >
          Lorem Ipsum dolor
        </div>
        <div style={{ textAlign: "center", position: "relative", top: 90 }}>
          {" "}
          simply dummy text of the printing and typesetting industry.
          <br /> Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s,
          <br /> when an unknown printer took a galley of type and scrambled it
          to make a type specimen book{" "}
        </div>
      </>
    );
  }
}

export default Homepage;
