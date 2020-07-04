import React, { Component } from "react";
import Particles from "react-particles-js";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import "../../styles/particlesStyles.css";

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
      <React.Fragment>
        <Particles
          params={{
            background: {
              color: {
                value: "#F5F1ED",
              },
            },
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 5,
              },
              color: {
                value: "#0099FF",
              },
              links: {
                color: {
                  value: "#0099FF",
                },
              },
            },
            interactivity: {
              detectsOn: "window",
              events: {
                onhover: {
                  enable: false,
                },
              },
            },
          }}
          id="particlesBG"
        />
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
      </React.Fragment>
    );
  }
}

export default Layout;
