import React, { Component } from "react";
import Layout from "../components/layout";
import AboutBio from "../components/About/AboutBio";
import TabbedCodeView from "../components/TabbedCodeView";

//todo: move away from br as spacing, just calculate how many pixels its taking up instead and use that for margin.
//todo: get rid of unecessary react.fragment

class About extends Component {
  renderView = () => {
    let codeView = false;

    if (typeof localStorage !== "undefined") {
      codeView = JSON.parse(localStorage.getItem("codeView")) || false;
    }

    if (!codeView) {
      console.log("Rendering bio");
      return <AboutBio />;
    } else {
      console.log("Rendering code view");
      return <TabbedCodeView />;
    }
  };

  render() {
    return (
      <Layout>
        <br />
        <br />
        {this.renderView()}
        <br />
        <br />
        <br />
        <br />
      </Layout>
    );
  }
}

export default About;
