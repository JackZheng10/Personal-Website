/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React, { Component } from "react";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

//todo: make footer float to bottom. dont want the page to have to be long
//todo: make sure there aren't unecessary class components. be impressive man
//todo: make footer stick to bottom, but footer + main is minheight 100vh. doesnt account resize. try window event listener
//todo: darkmode?
//todo: vis sensor on arrows? keep non-vis on main titles
//todo: port to gatsby?
//todo: {/*find better solution to sticky footer - will not account for window resizing since not re-rendered*/}
//todo: work on cleaning up unecessary styles/code
//todo: !!!FIX FOUC (flash of unstyled content). solutions available for gatsby deployment.
//todo: !!!with gatsby transfer, the code toggle button doesn't work

class Layout extends Component {
  componentDidMount = () => {
    window.addEventListener("storage", (event) => {
      if (event.key === "codeView") {
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("toggledBefore", true);
        }

        this.props.toggleCodeView(event.newValue);
      }
    });
  };

  toggleCodeView = (event) => {
    //BRO IT'S A STRING AHHH I DIDN'T KNOW
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("codeView", event.target.checked);
    }

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("toggledBefore", true);
    }

    this.props.toggleCodeView(event.target.checked);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Topbar toggleCodeView={this.toggleCodeView} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
