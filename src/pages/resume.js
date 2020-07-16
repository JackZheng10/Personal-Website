import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout/Layout";
import ResumeView from "../components/Resume/ResumeView";
import CodeView from "../components/CodeView";

class Resume extends Component {
  state = { codeView: false, initialized: false };

  componentDidMount = () => {
    this.setState({ initialized: true });
  };

  setView = (codeView) => {
    this.setState({ codeView });
  };

  renderView = () => {
    if (this.state.initialized) {
      let codeView = false;

      if (typeof localStorage !== "undefined") {
        codeView = JSON.parse(localStorage.getItem("codeView")) || false;
      }

      if (!codeView) {
        return <ResumeView />;
      } else {
        return <CodeView />;
      }
    } else {
      return null;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Resume</title>
          <meta
            name="description"
            content="Download the latest version of my resume."
          />
          <link rel="canonical" href="https://jackzheng.dev/resume" />
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

export default Resume;
