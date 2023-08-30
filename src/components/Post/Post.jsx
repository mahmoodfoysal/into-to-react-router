import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/posts/${id}`)
    };
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className='post'>
            <h4>ID: {id}</h4>
            <p>Title: {title}</p>
            <Link to = {`/posts/${id}`}>Show Details</Link>
            <Link to = {`/posts/${id}`}><button>Show more Details</button></Link>
            <button onClick={handleNavigation}>With button Handler</button>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Post;