import React, { Component } from "react";
import { Grid, Typography, withStyles, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "../styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Number from "./Number";

class Counter extends Component {
  state = { number: 0 };

  decreaseNumber = () => {
    this.setState({ number: this.state.number - 1 });
  };

  increaseNumber = () => {
    this.setState({ number: this.state.number + 1 });
  };

  resetCounter = () => {
    this.setState({ number: 0 });
  };

  render() {
    const classes = this.props.classes;

    return (
      <React.Fragment>
        {/*top bar*/}
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8a2387, #e94057, #f27121)",
          }}
        >
          <Grid item>
            <Typography variant="h3" className={classes.name}>
              Counter
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {/*subtract*/}
          <Grid item>
            <IconButton
              className={classes.redButton}
              onClick={this.decreaseNumber}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
          {/*number*/}
          <Grid item>
            <Number
              number={this.state.number}
              resetCounter={this.resetCounter}
            />
          </Grid>
          {/*add*/}
          <Grid item>
            <IconButton
              className={classes.greenButton}
              onClick={this.increaseNumber}
            >
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Counter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Counter);
