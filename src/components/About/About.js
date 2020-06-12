import React, { Component } from "react";
import AboutBio from "./components/AboutBio";
import TabbedCodeView from "../components/TabbedCodeView";

//todo: test on mobile: when small enough, change the topbar buttons to just iconbuttons + resize bottom images as they cause bleedingnpm s
//todo: fix br spacings hehe
//todo: images maybe look ratchet on mobile
//todo: use the window scroll to on every page to force starting at the top
//todo: stay visible after shown, just use prev state, if true then keep true?
//todo: why does the code button toggle not persist upon refresh?

class About extends Component {
  renderView = () => {
    let codeView = JSON.parse(localStorage.getItem("codeView")) || false;

    if (!codeView) {
      console.log("entered 1");
      return <AboutBio />;
    } else {
      console.log("entered 2");
      return <TabbedCodeView />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        {this.renderView()}
        <br />
        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default About;
