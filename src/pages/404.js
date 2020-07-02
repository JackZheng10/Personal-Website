import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Layout from "../components/Layout/Layout";

//todo: make this text responsive

class NotFound extends Component {
  toggleCodeView = () => {
    alert(
      "This should do nothing. Disable the toggle for this page, pass bool prop -> Layout -> Topbar"
    );
  };

  render() {
    return (
      <Layout toggleCodeView={this.toggleCodeView} hideToggle={true}>
        <br />
        <br />
        <Typography
          variant="h3"
          style={{ textAlign: "center", fontWeight: 600 }}
        >
          Oops! Page not found.
        </Typography>
        <br />
        <br />
        <br />
        <br />
      </Layout>
    );
  }
}

export default NotFound;
