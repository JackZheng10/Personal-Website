import React from "react";
import { Router, Redirect } from "@reach/router";

function App() {
  return (
    <React.Fragment>
      <Router>
        {/*had to add path prop to allow dev to work*/}
        <Redirect noThrow from="/" to="/about" path="/" />
      </Router>
    </React.Fragment>
  );
}

export default App;
