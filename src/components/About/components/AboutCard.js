import React from "react";
import {
  withStyles,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Divider,
  Grid,
} from "@material-ui/core";
import PropTypes from "prop-types";
import aboutCardStyles from "../../../styles/aboutCardStyles";

//todo: hovers? https://codesandbox.io/s/material-ui-card-styling-example-ewc5j?file=/src/index.js

function AboutCard(props) {
  const classes = props.classes;

  return (
    <div className={classes.layout}>
      <Card className={classes.root} elevation={10}>
        <CardHeader
          title={props.title}
          titleTypographyProps={{ variant: "h5", className: classes.title }}
          className={classes.cardHeader}
        />
        <Divider />
        {/* <StaticQuery
          query={imagesQuery}
          render={(data) => <Img fixed={data.UF.childImageSharp.fixed} />}
        /> */}
        {/* <StaticQuery
          query={imagesQuery}
          render={(data) => (
            <CardMedia title={props.alt} className={classes.media}>
              <Img fixed={data.UF.childImageSharp.fixed} />
            </CardMedia>
          )}
        /> */}
        <CardMedia
          image={props.image}
          title={props.alt}
          className={classes.media}
        />
        <Divider />
        <CardContent className={classes.cardContent}>
          <Grid container spacing={0} direction="column" justify="flex-end">
            <Grid item>
              <Typography variant="body1" className={classes.text}>
                {props.text}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

AboutCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(aboutCardStyles)(AboutCard);

// state = { elevation: 0 };

//   toggleElevation = () => {
//     this.setState({ elevation: this.state.elevation === 0 ? 20 : 0 });
//   };

// onMouseOver={this.toggleElevation}
// onMouseOut={this.toggleElevation}
