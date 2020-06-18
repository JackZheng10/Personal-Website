import React, { Component } from "react";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

//fullpage slider stuff
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import {
  Provider,
  Link,
  withNavigationContext,
  withNavigationHandlers,
} from "react-awesome-slider/dist/navigation";

import About from "../../pages/about";
import Projects from "../../pages/projects";
import Resume from "../../pages/resume";

// Wrapp the AwesomeSlider component with the navigationHandlers
const NavigationSlider = withNavigationHandlers(AwesomeSlider);

// Create an AwesomeSlider instance with some content
const Slider = () => {
  return (
    <NavigationSlider
      className="awesome-slider"
      media={[
        {
          slug: "about",
          className: "about",
          children: <About />,
        },
        {
          slug: "projects",
          className: "projects",
          children: <Projects />,
        },
        {
          slug: "resume",
          className: "resume",
          children: <Resume />,
        },
      ]}
    />
  );
};

class Layout extends Component {
  toggleCodeView = (event) => {
    //BRO IT'S A STRING AHHH I DIDN'T KNOW
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("codeView", event.target.checked);
    }
    console.log("Code view changed to: " + event.target.checked);

    this.props.toggleCodeView(event.target.checked);
  };

  render() {
    const slug = "about";

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* <Provider slug={slug}> */}
        <Topbar toggleCodeView={this.toggleCodeView} />
        {/* <NavigationSlider /> */}
        {this.props.children}
        <Footer />
        {/* </Provider> */}
      </div>
    );
  }
}

export default Layout;
