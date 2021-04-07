import React from 'react';
import { useSelector } from 'react-redux';//fetch data from global redux store

import Post from './Post/Post';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        <>
        <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;