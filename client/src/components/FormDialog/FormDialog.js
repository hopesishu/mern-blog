import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [postData, setPostData] = useState({title: '', content: ''});
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
      e.preventDefault(); //prevent refresh in browser

      dispatch(createPost(postData));
      console.log("Post button pressed");
    }

    return (
        <div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Add new post!
          </Button>
          <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <DialogTitle id="form-dialog-title">New Post</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  What do you want to update on today? 
                </DialogContentText>
                <TextField
                  name="title"
                  id="title-textarea"
                  label="Title"
                  placeholder="Enter title here"
                  variant="outlined"
                  value={postData.title}
                  onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                  multiline
                  fullWidth
                  />
                <TextField
                  name="content"
                  id="content-textarea"
                  label="Content"
                  placeholder="Enter text here"
                  variant="outlined"
                  value={postData.content}
                  onChange={(e) => setPostData({ ...postData, content: e.target.value })}
                  rows={6}
                  multiline
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Post
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </div>
      );
}