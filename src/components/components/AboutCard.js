import React from "react";
import {
  withStyles,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from "@material-ui/core";
import PropTypes from "prop-types";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import aboutCardStyles from "../../styles/aboutCardStyles";

function AboutCard(props) {
  const classes = props.classes;

  return (
    <Card className={classes.card}>
      <CardHeader
        title="Current Number"
        titleTypographyProps={{ variant: "h5" }}
        className={classes.cardHeader}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body1">Testingggg</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton>
          <RotateLeftIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

AboutCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(aboutCardStyles)(AboutCard);
