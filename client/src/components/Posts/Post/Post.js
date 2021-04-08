import React from 'react';
import { Card, CardHeader, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
 
const Post = ({ post, setCurrentId }) => {
    const handleEdit = () => {
        
        setCurrentId(post._id);
    }

    return (
        <Card>
            <CardHeader title={post.title} subheader={moment(post.createdAt).format("LLL")} />

            <Button style={{color: 'black'}} size="small" onClick={() => setCurrentId(post._id)}>
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