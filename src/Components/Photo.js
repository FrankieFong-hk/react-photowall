import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const Photo = (props) => {
    const navigate = useNavigate();

    const post = props.post;
    return(
        <figure className="figure">
            <Link to={`/react-photowall/single/${post.id}`}>
                <img className="photo" src={post.imageLink} alt={post.description}/>
            </Link>
            <figcaption>
                <p>
                    {post.description}
                </p>
            </figcaption>
            <div className="button-container">
                <button onClick={() => {
                    props.startRemovingPost(props.index, post.id);
                    // props.removePost(props.index);

                    navigate('/react-photowall/');
                }}> Remove </button>
                <Link className="button" to={`/react-photowall/single/${post.id}`}>
                    <div className="comment-count">
                    <div className="speech-bubble"></div>
                        {props.comments[post.id] ? props.comments[post.id].length : 0}
                    </div>
                </Link>
            </div>
        </figure>
    )
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Photo;