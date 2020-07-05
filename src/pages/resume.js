import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout/Layout";
import ResumeView from "../components/Resume/ResumeView";
import CodeView from "../components/CodeView";

class Resume extends Component {
  state = { codeView: false };

  setView = (codeView) => {
    this.setState({ codeView });
  };

  renderView = () => {
    let codeView = false;

    if (typeof localStorage !== "undefined") {
      codeView = JSON.parse(localStorage.getItem("codeView")) || false;
    }

    if (!codeView) {
      return <ResumeView />;
    } else {
      return <CodeView />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta
            name="Description"
            content="Download the latest version of my resume."
          />
        </Helmet>
        <Layout setView={this.setView}>
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

export default Resume;
