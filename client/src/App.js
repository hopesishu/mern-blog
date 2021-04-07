import React, { useEffect } from 'react';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Posts/Posts';
import FormDialog from './components/FormDialog/FormDialog';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxidth="lg">
      {/* <AppBar className={classes.appBar} >
        <Typography variant="h6">
          home
        </Typography>
      </AppBar> */}
      <FormDialog />
      <Grow in>
        <Container>
        <Typography className={classes.title} variant="h4">Crochet Projects</Typography>
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

    </Container>
  );
}

export default App;
