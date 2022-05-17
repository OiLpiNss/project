import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from "./Component/Posts/Posts";
import Form from "./Component/Form/Form";
import useStyles from "./styles";
const App = () => {
  const classes = useStyles();

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Hello beautifull peopleossss!!
        </Typography>
      </AppBar>
      <Grow in></Grow>
      <Container>
        <Grid
          container
          justify="space-between"
          alighItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};
export default App;
