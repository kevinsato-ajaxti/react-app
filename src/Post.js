import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props){
    return (
        <>
        <article>
            <strong>{props.post.title}</strong><br/>
            <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
            <br/>
            <small>{props.post.subtitle}</small>
            <br/>
            media: {props.likes / 2}
        </article>
        <br/>
        </>
    );
}

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    }).isRequired 
};