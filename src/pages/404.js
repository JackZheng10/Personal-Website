import React from "react";
import { Typography } from "@material-ui/core";
import Layout from "../components/Layout/Layout";

function NotFound() {
  return (
    <React.Fragment>
      <Layout hideToggle={true}>
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

export default NotFound;
