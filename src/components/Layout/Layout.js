import React, { Component } from "react";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

class Layout extends Component {
  state = { loaded: false };

  componentDidMount = () => {
    this.setState({ loaded: true }, () => {
      window.addEventListener("storage", (event) => {
        if (event.key === "codeView") {
          if (typeof localStorage !== "undefined") {
            localStorage.setItem("toggledBefore", true);
          }

          this.props.setView(event.newValue);
        }
      });
    });
  };

  toggleCodeView = (event) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("codeView", event.target.checked);
    }

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("toggledBefore", true);
    }

    this.props.setView(event.target.checked);
  };

  render() {
    return (
      <div style={{ display: this.state.loaded ? "" : "none" }}>
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
      </div>
    );
  }
}

export default Layout;
