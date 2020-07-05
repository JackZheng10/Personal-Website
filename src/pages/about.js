import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout/Layout";
import AboutView from "../components/About/AboutView";
import CodeView from "../components/CodeView";

class About extends Component {
  state = { codeView: false, initialized: false };

  componentDidMount = () => {
    this.setState({ initialized: true });
  };

  //used for switching the view by updating state to rerender
  setView = (codeView) => {
    this.setState({ codeView });
  };

  renderView = () => {
    let codeView = false;

    if (typeof localStorage !== "undefined") {
      codeView = JSON.parse(localStorage.getItem("codeView")) || false;
    }

    if (this.state.initialized) {
      // alert("initialized 1: " + this.state.initialized);
      if (!codeView) {
        return <AboutView />;
      } else {
        return <CodeView />;
      }
    } else {
      // alert("initialized 2: " + this.state.initialized);
      return null;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta name="Description" content="Learn more about me." />
        </Helmet>
        <Layout setView={this.setView}>
          <div style={{ height: 40 }} />
          {this.renderView()}
          <div style={{ height: 80 }} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default About;
