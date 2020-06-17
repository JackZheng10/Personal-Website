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

//todo: movile - shows whitespace at bottom when swiping since doesnt resize automatically?

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
            title="Placeholder"
            titleTypographyProps={{ variant: "h3", className: classes.title }}
            className={classes.cardHeader}
          />
          {/* <Divider /> */}
          <CardContent className={classes.cardContent}>
            <Typography variant="body1" className={classes.text}>
              "Placeholder"
            </Typography>
          </CardContent>
          {/* <Divider /> */}
          <CardActions>
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
