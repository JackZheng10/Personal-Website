import React from "react";
import { Router, Redirect } from "@reach/router";

function App() {
  // if (typeof window !== "undefined") {
  //   //redirect to home page. doesnt work w build so figure out another way. should be easy
  //   window.location = "/about";
  // }
  return (
    <React.Fragment>
      <Router>
        <Redirect noThrow from="/" to="/about" />
      </Router>
    </React.Fragment>
  );
}

export default App;
