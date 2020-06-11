import React, { Component } from "react";
import { CodeViewer } from "react-extensible-code-viewer";
import "react-extensible-code-viewer/dist/index.css";

const code = `const a = 2
const b = 3;
console.log(a + b)`;

class Example extends Component {
  render() {
    return (
      <React.Fragment>
        <CodeViewer code={code} language="javascript" />
        <br />
      </React.Fragment>
    );
  }
}

export default Example;
