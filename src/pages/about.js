import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout/Layout";
import AboutView from "../components/About/AboutView";
import TabbedCodeView from "../components/TabbedCodeView";

class About extends Component {
  //testing only
  // componentDidMount = () => {
  //   localStorage.removeItem("toggledBefore");
  // };

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
      return <AboutView />;
    } else {
      console.log("Rendering code view");
      return <TabbedCodeView />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta name="Description" content="Learn more about me." />
        </Helmet>
        <Layout toggleCodeView={this.toggleCodeView}>
          <br />
          <br />
          {this.renderView()}
          <br />
          <br />
          <br />
          <br />
        </Layout>
      </React.Fragment>
    );
  }
}

export default About;
