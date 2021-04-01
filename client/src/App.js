import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Posts/Posts';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <Container style={{padding: 0, margin: 0}} maxidth="lg">
      <AppBar style={{padding: 0, margin:0}} className={classes.appBar} position="static" >
        <Typography variant="h6">
          home
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <Typography variant="h4" align="center">Crochet Projects</Typography>
    </Container>
  );
}

export default App;
