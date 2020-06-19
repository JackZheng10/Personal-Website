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
  Button,
} from "@material-ui/core";
import PropTypes from "prop-types";
import GitHubIcon from "@material-ui/icons/GitHub";
import projectCardStyles from "../../../styles/projectCardStyles";

import testImage from "../../../images/testImage.jpg";

//image carousel test
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

//todo: movile - shows whitespace at bottom when swiping since doesnt resize automatically?
//todo: the messed up images are due to the actual image...the codesanbox image works right

class ProjectsCard extends Component {
  handleCodeLink = () => {
    alert("Navigate");
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

          {/* <CardContent className={classes.cardContent}>
            <CardMedia
              className={classes.media}
              image={testImage}
              title="placeholder"
            />
          </CardContent> */}
          {/* <div>
            <CardMedia
              className={classes.media}
              image={testImage}
              title="placeholder"
            />
          </div> */}
          <div>
            <AwesomeSlider
              className={classes.imageSlider}
              media={this.props.media}
            />
          </div>
          <CardContent className={classes.cardContent}>
            <Typography variant="body1" className={classes.contentText}>
              "Placeholder"
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

ProjectsCard.propTypes = {
  className: PropTypes.string,
};

export default withStyles(projectCardStyles)(ProjectsCard);
