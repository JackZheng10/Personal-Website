import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout/Layout";
import ProjectsView from "../components/Projects/ProjectsView";
import TabbedCodeView from "../components/TabbedCodeView";

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
      <React.Fragment>
        <Helmet>
          <meta
            name="Description"
            content="Explore some of the projects I've worked on."
          />
        </Helmet>
        <Layout toggleCodeView={this.toggleCodeView}>
          <div style={{ height: 40 }} />
          {this.renderView()}
          <div style={{ height: 80 }} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default Projects;
