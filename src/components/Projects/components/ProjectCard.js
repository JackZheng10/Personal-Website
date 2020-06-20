import React, { Component } from "react";
import {
  Fade,
  withStyles,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Divider,
  CardActions,
  Icon,
  Button,
  IconButton,
} from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";
import GitHubIcon from "@material-ui/icons/GitHub";
import projectCardStyles from "../../../styles/projectCardStyles";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//todo: movile - shows whitespace at bottom when swiping since doesnt resize automatically?
//todo: the messed up images are due to the actual image...the codesanbox image works right

class ProjectCard extends Component {
  handleCodeLink = () => {
    alert("Navigate");
  };

  renderNextButton = (onClickHandler, classes) => {
    return (
      <IconButton className={classes.imageButtonRight} onClick={onClickHandler}>
        <ArrowForwardIosOutlinedIcon fontSize="large" />
      </IconButton>
    );
  };

  renderPrevButton = (onClickHandler, classes) => {
    return (
      <IconButton className={classes.imageButtonLeft} onClick={onClickHandler}>
        <ArrowBackIosOutlinedIcon fontSize="large" />
      </IconButton>
    );
  };

  renderImages = (classes) => {
    return this.props.images.map((image, index) => {
      return (
        <CardMedia
          className={classes.media}
          image={image}
          title="Project Picture"
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
              return this.renderNextButton(onClickHandler, classes);
            }}
            renderArrowPrev={(onClickHandler) => {
              return this.renderPrevButton(onClickHandler, classes);
            }}
            statusFormatter={(current, total) => ""}
            showThumbs={false}
            autoPlay
            infiniteLoop
            transitionTime={1000}
            interval={6000}
          >
            {this.renderImages(classes)}
          </Carousel>
          <CardContent className={classes.cardContent}>
            <Typography variant="body1" className={classes.contentText}>
              {this.props.description}
            </Typography>
          </CardContent>
          {/* <Divider /> */}
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
