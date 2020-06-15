import React, { Component } from "react";
import Layout from "../components/layout";
import AboutBio from "../components/About/AboutBio";
import TabbedCodeView from "../components/TabbedCodeView";

//todo: move away from br as spacing, just calculate how many pixels its taking up instead and use that for margin.
//todo: get rid of unecessary react.fragment
//todo: solution is to pass a callback into layout and have layout call it, but i dont want to make a function in every page for it.
//important: will not rerender if props are same.

class About extends Component {
  state = { codeView: false };

  toggleCodeView = (codeView) => {
    this.setState({ codeView });
  };

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
      <Layout toggleCodeView={this.toggleCodeView}>
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
