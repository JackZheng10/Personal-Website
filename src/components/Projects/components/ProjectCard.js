import React, { Component } from "react";
import {
  withStyles,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";
import { IconButton } from "gatsby-theme-material-ui";
import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";
import GitHubIcon from "@material-ui/icons/GitHub";
import projectCardStyles from "../../../styles/projectCardStyles";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ProjectCard extends Component {
  handleCodeLink = () => {
    if (typeof window !== `undefined`) {
      window.open(this.props.link);
    }
  };

  renderNextButton = (onClickHandler, classes, showNav) => {
    if (!showNav) {
      return null;
    } else {
      return (
        <IconButton
          className={classes.imageButtonRight}
          onClick={onClickHandler}
          aria-label="Next"
        >
          <ArrowForwardIosOutlinedIcon fontSize="large" />
        </IconButton>
      );
    }
  };

  renderPrevButton = (onClickHandler, classes, showNav) => {
    if (!showNav) {
      return null;
    } else {
      return (
        <IconButton
          className={classes.imageButtonLeft}
          onClick={onClickHandler}
          aria-label="Previous"
        >
          <ArrowBackIosOutlinedIcon fontSize="large" />
        </IconButton>
      );
    }
  };

  renderImages = (classes) => {
    return this.props.images.map((image, index) => {
      return (
        <CardMedia
          className={classes.media}
          image={image.src}
          title={image.alt}
          key={index}
        />
      );
    });
  };

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.layout}>
        <Card className={classes.root} elevation={10}>
          <CardHeader
            title={this.props.title}
            titleTypographyProps={{ variant: "h3", className: classes.title }}
            className={classes.cardHeader}
          />
          <Carousel
            renderArrowNext={(onClickHandler) => {
              return this.renderNextButton(
                onClickHandler,
                classes,
                this.props.showNav
              );
            }}
            renderArrowPrev={(onClickHandler) => {
              return this.renderPrevButton(
                onClickHandler,
                classes,
                this.props.showNav
              );
            }}
            showStatus={false}
            showThumbs={false}
            autoPlay
            infiniteLoop
            transitionTime={1000}
            interval={15000}
            showIndicators={this.props.showNav}
          >
            {this.renderImages(classes)}
          </Carousel>
          <CardContent className={classes.cardContent}>
            <Typography variant="body1" className={classes.contentText}>
              {this.props.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Grid container justify="center">
              <Grid item className={classes.buttonContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<GitHubIcon />}
                  onClick={this.handleCodeLink}
                  aria-label="Source Code"
                >
                  Source Code
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </div>
    );
  }
}

ProjectCard.propTypes = {
  className: PropTypes.string,
};

export default withStyles(projectCardStyles)(ProjectCard);
