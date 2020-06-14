import React, { Component } from "react";
import AboutBio from "./components/AboutBio";
import TabbedCodeView from "../components/TabbedCodeView";

//todo: move away from br as spacing, just calculate how many pixels its taking up instead and use that for margin.

class About extends Component {
  renderView = () => {
    let codeView = JSON.parse(localStorage.getItem("codeView")) || false;

    if (!codeView) {
      console.log("entered 1");
      return <AboutBio />;
    } else {
      console.log("entered 2");
      return <TabbedCodeView />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        {this.renderView()}
        <br />
        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default About;
