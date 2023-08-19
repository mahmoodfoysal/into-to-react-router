import React from 'react';
import './Friend.css';

const Friend = (props) => {
    const {name, email, id, phone} = props.friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>

        </div>
    );
};

export default Friend;