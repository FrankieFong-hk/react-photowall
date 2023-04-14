import React from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types'

const PhotoWall = (props) => (
    <div>
        <button className="addIcon" onClick={props.onNavigate}></button>
        <div className="photoGrid">
            {props.posts.map((post, index) => <Photo  key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
        </div>
    </div>
)

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall;