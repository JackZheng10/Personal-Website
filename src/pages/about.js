import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout/Layout";
import AboutView from "../components/About/AboutView";
import CodeView from "../components/CodeView";

class About extends Component {
  state = { loaded: false, codeView: false };

  componentDidMount = () => {
    this.setState({ loaded: true });
  };

  toggleCodeView = (codeView) => {
    this.setState({ codeView });
  };

  renderView = (loaded) => {
    let codeView = false;

    if (typeof localStorage !== "undefined") {
      codeView = JSON.parse(localStorage.getItem("codeView")) || false;
    }

    if (!codeView) {
      return <AboutView style={{ display: loaded ? "" : "none" }} />;
    } else {
      return <CodeView style={{ display: loaded ? "" : "none" }} />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta name="Description" content="Learn more about me." />
          {/* <body style={{ display: this.state.loaded ? "" : "none" }} /> */}
        </Helmet>
        <Layout toggleCodeView={this.toggleCodeView} loaded={this.state.loaded}>
          <div style={{ height: 40 }} />
          {this.renderView(this.state.loaded)}
          <div style={{ height: 80 }} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default About;
