import React from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PhotoWall = (props) => (
    <div>
        <Link className="addIcon" to="/react-photowall/AddPhoto"></Link>
        <div className="photoGrid">
            {props.posts
                .sort((x, y) => {
                    return y.id - x.id;
                })
                .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
        </div>
    </div>
)

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default PhotoWall;