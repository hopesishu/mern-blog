import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import FormDialog from './components/FormDialog/FormDialog';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const [open, setOpen] = useState(false); //for dialog
   
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxidth="lg">
      {/* <AppBar className={classes.appBar} >
        <Typography variant="h6">
          home
        </Typography>
      </AppBar> */} 
       
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Add new post!
      </Button>
      <FormDialog currentId={currentId} setCurrentId={setCurrentId} open={open} setOpen={setOpen}/>
      
      <Grow in>
        <Container>
        <Typography className={classes.title} variant="h4">Crochet Projects</Typography>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12}>
              <Posts setCurrentId={setCurrentId} setOpen={setOpen}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
