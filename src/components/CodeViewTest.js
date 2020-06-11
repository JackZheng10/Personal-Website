import React, { Component } from "react";
import { CodeViewer } from "react-extensible-code-viewer";
import { Fade, Button } from "@material-ui/core";
import "react-extensible-code-viewer/dist/index.css";

const code = `const a = 2
const b = 3;
console.log(a + b)`;

class Example extends Component {
  render() {
    return (
      <React.Fragment>
        <Fade in={this.props.viewCode} timeout={3000}>
          <div>
            <CodeViewer code={code} language="javascript" />
          </div>
        </Fade>
        <Fade in={!this.props.viewCode} timeout={3000}>
          <div>
            <h1>normal page: {this.props.viewCode}</h1>
          </div>
        </Fade>

        <br />
      </React.Fragment>
    );
  }
}

export default Example;
