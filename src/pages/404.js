import React from "react";
import { Grid, Typography } from "@material-ui/core";

function NotFound() {
  return (
    <Grid
      container
      spacing={0}
      align="center"
      justify="center"
      direction="column"
      style={{ height: "100vh" }}
    >
      <Grid item>
        <Typography variant="h3" style={{ fontWeight: 600 }}>
          Under construction. Please check back soon!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default NotFound;
