import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

function withImageData(WrappedComponent) {
  return (props) => (
    <StaticQuery
      query={graphql`
        query {
          logo: file(relativePath: { eq: "Logo.png" }) {
            childImageSharp {
              fixed(height: 45, width: 45) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }

          me: file(relativePath: { eq: "AboutMe/Me.png" }) {
            childImageSharp {
              fluid(maxWidth: 444) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          GH: file(relativePath: { eq: "Footer/GitHub.png" }) {
            childImageSharp {
              fixed(height: 52, width: 125) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }

          LI: file(relativePath: { eq: "Footer/LinkedIn.png" }) {
            childImageSharp {
              fixed(height: 34, width: 138) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }

          email: file(relativePath: { eq: "Footer/Email.png" }) {
            childImageSharp {
              fixed(height: 52, width: 52) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      `}
      render={(data) => <WrappedComponent {...props} imageData={data} />}
    />
  );
}

const Logo = withImageData((props) => (
  <Img fixed={props.imageData.logo.childImageSharp.fixed} {...props} />
));

const Me = withImageData((props) => (
  <Img fluid={props.imageData.me.childImageSharp.fluid} {...props} />
));

const GH = withImageData((props) => (
  <Img fixed={props.imageData.GH.childImageSharp.fixed} {...props} />
));

const LI = withImageData((props) => (
  <Img fixed={props.imageData.LI.childImageSharp.fixed} {...props} />
));

const Email = withImageData((props) => (
  <Img fixed={props.imageData.email.childImageSharp.fixed} {...props} />
));

export { Logo, Me, GH, LI, Email };
