import React from "react";
import {
  withStyles,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Divider,
} from "@material-ui/core";
import PropTypes from "prop-types";
import aboutCardStyles from "../../styles/aboutCardStyles";

function AboutCard(props) {
  const classes = props.classes;

  return (
    <div className={classes.layout}>
      <Card className={classes.root} elevation={10}>
        {/* <Card className={classes.card}> */}
        <CardHeader
          title={props.title}
          titleTypographyProps={{ variant: "h5", className: classes.title }}
          className={classes.cardHeader}
        />
        <Divider />
        <CardMedia
          image={props.image}
          title={props.alt}
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="body1" className={classes.text}>
            {props.text}
          </Typography>
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
