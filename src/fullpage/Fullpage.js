import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import {
  withNavigationHandlers,
  withNavigationContext,
} from "react-awesome-slider/dist/navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

const media = [
  {
    slug: "about",
    className: "about",
    children: <About />,
  },
  {
    slug: "projects",
    className: "projects",
    children: <Projects />,
  },
  {
    slug: "resume",
    className: "resume",
    children: <Resume />,
  },
];

const Slider = withNavigationHandlers(AwesomeSlider);

function FullpageSlider() {
  return <Slider startupDelay={275} className="awesome-slider" media={media} />;
}

export default FullpageSlider;