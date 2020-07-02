import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

function withImageData(WrappedComponent) {
  return (props) => (
    <StaticQuery
      query={graphql`
        query {
          me: file(relativePath: { eq: "AboutMe/Me.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }

          GH: file(relativePath: { eq: "Footer/GitHub.png" }) {
            childImageSharp {
              fixed(height: 52, width: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }

          LI: file(relativePath: { eq: "Footer/LinkedIn.png" }) {
            childImageSharp {
              fixed(height: 34, width: 138) {
                ...GatsbyImageSharpFixed
              }
            }
          }

          email: file(relativePath: { eq: "Footer/Email.png" }) {
            childImageSharp {
              fixed(height: 52, width: 52) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) => <WrappedComponent {...props} imageData={data} />}
    />
  );
}

const Me = withImageData((props) => (
  <Img fluid={props.imageData.me.childImageSharp.fluid} />
));

const GH = withImageData((props) => (
  <Img fixed={props.imageData.GH.childImageSharp.fixed} />
));

const LI = withImageData((props) => (
  <Img fixed={props.imageData.LI.childImageSharp.fixed} />
));

const Email = withImageData((props) => (
  <Img fixed={props.imageData.email.childImageSharp.fixed} />
));

export { Me, GH, LI, Email };
