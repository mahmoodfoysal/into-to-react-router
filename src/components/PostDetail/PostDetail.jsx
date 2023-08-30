import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    console.log(post)
    return (
        <div>
            <h3>Details About Your Post</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;