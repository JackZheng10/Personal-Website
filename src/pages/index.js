import React from "react";
import { Router, Redirect } from "@reach/router";
import { Helmet } from "react-helmet";

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Jack Zheng</title>
        <meta
          name="description"
          content="Personal website/portfolio for Jack Zheng"
        />
        <link rel="canonical" href="https://jackzheng.dev/" />
      </Helmet>
      <Router>
        <Redirect noThrow from="/" to="/about" path="/" />
      </Router>
    </React.Fragment>
  );
}

export default App;
