import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout/Layout";
import ProjectsView from "../components/Projects/ProjectsView";
import CodeView from "../components/CodeView";

class Projects extends Component {
  state = { loaded: false, codeView: false };

  componentDidMount = () => {
    this.setState({ loaded: true });
  };

  toggleCodeView = (codeView) => {
    this.setState({ codeView });
  };

  renderView = () => {
    let codeView = false;

    if (typeof localStorage !== "undefined") {
      codeView = JSON.parse(localStorage.getItem("codeView")) || false;
    }

    if (!codeView) {
      return <ProjectsView />;
    } else {
      return <CodeView />;
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
          {/* <body style={{ display: this.state.loaded ? "" : "none" }} /> */}
        </Helmet>
        <Layout
          toggleCodeView={this.toggleCodeView}
          style={{ display: this.state.loaded ? "" : "none" }}
        >
          <div style={{ height: 40 }} />
          {this.renderView()}
          <div style={{ height: 80 }} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default Projects;
