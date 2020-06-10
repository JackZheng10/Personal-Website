import React from "react";
import {
  withStyles,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  CardMedia,
  Divider,
} from "@material-ui/core";
import PropTypes from "prop-types";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import aboutCardStyles from "../../styles/aboutCardStyles";

function AboutCard(props) {
  const classes = props.classes;

  return (
    <div className={classes.layout}>
      <Card className={classes.root}>
        {/* <Card className={classes.card}> */}
        <CardHeader
          title={props.title}
          titleTypographyProps={{ variant: "h5", className: classes.title }}
          className={classes.cardHeader}
        />
        <Divider />
        <CardMedia
          image={props.image}
          component={"img"}
          title="Image"
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="body1" className={classes.text}>
            {props.text}
          </Typography>
        </CardContent>
        {/* <CardActions className={classes.cardActions}>
        <IconButton>
          <RotateLeftIcon />
        </IconButton>
      </CardActions> */}
        {/* </Card> */}
      </Card>
    </div>
  );
}

AboutCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(aboutCardStyles)(AboutCard);
