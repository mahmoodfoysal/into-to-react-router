import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h1>All Post are here</h1>
            <div>
                {
                    posts.map(post => <Post
                    key = {post.id}
                    post = {post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;