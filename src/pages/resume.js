import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import ResumeView from "../components/Resume/ResumeView";
import TabbedCodeView from "../components/TabbedCodeView";

class Resume extends Component {
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
      console.log("Rendering resume");
      return <ResumeView />;
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

export default Resume;
