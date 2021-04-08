import React from 'react';
import { Card, CardHeader, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
 
const Post = ({ post, setCurrentId, setOpen }) => {
    const handleEdit = () => {
        setCurrentId(post._id);
        setOpen(true);
    }

    return (
        <Card>
            <CardHeader title={post.title} subheader={moment(post.createdAt).format("LLL")} />

            <Button style={{color: 'black'}} size="small" onClick={handleEdit}>
                <MoreHorizIcon fontSize="default" />
            </Button>

            <CardContent>
                <Typography variant="h5" gutterBottom>{post.content}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small" />
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;