import React from "react";
import { Helmet } from "react-helmet";

function Wrapper(props) {
  return (
    <React.StrictMode>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Jack Zheng</title>
        <link rel="canonical" href="https://jackzheng.dev/" />
      </Helmet>
      {props.children}
    </React.StrictMode>
  );
}

export const wrapPageElement = ({ element }) => <Wrapper>{element}</Wrapper>;
