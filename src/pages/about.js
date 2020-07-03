import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout/Layout";
import AboutView from "../components/About/AboutView";
import TabbedCodeView from "../components/TabbedCodeView";

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
      return <AboutView />;
    } else {
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
          <div style={{ height: 40 }} />
          {this.renderView()}
          <div style={{ height: 80 }} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default About;
