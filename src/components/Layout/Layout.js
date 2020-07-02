import React, { Component } from "react";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

//todo: make sure there aren't unecessary class components. be impressive man

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
        <Topbar
          toggleCodeView={this.toggleCodeView}
          hideToggle={this.props.hideToggle}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
