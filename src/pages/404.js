import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Typography } from "@material-ui/core";
import Layout from "../components/Layout/Layout";

class NotFound extends Component {
  state = { loaded: false };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          {/* <body style={{ display: this.state.loaded ? "" : "none" }} /> */}
        </Helmet>
        <Layout
          hideToggle={true}
          style={{ display: this.state.loaded ? "" : "none" }}
        >
          <div style={{ height: 40 }} />
          <Typography
            variant="h3"
            style={{ textAlign: "center", fontWeight: 600 }}
          >
            Oops! Page not found.
          </Typography>
          <div style={{ height: 80 }} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default NotFound;
