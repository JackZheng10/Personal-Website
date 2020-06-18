import React, { Component } from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Layout from "../../components/Layout/Layout";
import AboutView from "../../components/About/AboutView";
import TabbedCodeView from "../../components/TabbedCodeView";

import "../../styles/fullpage.css";

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
      return <AboutView />;
    } else {
      console.log("Rendering code view");
      return <TabbedCodeView />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="page">
          {/* <Layout toggleCodeView={this.toggleCodeView}> */}
          <br />
          <br />
          {this.renderView()}
          <br />
          <br />
          <br />
          <br />
          {/* </Layout> */}
        </div>
      </React.Fragment>
    );
  }
}

export default About;
