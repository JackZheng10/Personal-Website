import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import ProjectsView from "../components/Projects/ProjectsView";
import TabbedCodeView from "../components/TabbedCodeView";

//todo: move away from br as spacing, just calculate how many pixels its taking up instead and use that for margin.
//todo: get rid of unecessary react.fragment
//todo: solution is to pass a callback into layout and have layout call it, but i dont want to make a function in every page for it.
//important: will not rerender if props are same.
//todo: maybe move layout back into the wrapper, research more about wrapRoot vs wrapPage. if it doesnt get rerendered at all, keep it in layout. also maybe move particles into layout?

class Projects extends Component {
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
      return <ProjectsView />;
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

export default Projects;
