import React, {Component} from "react";
import Photo from "./Photo";

class PhotoWall extends Component {
    render() {
        return(
            <div className="photoGrid">
                {this.props.posts.map(post => <Photo post={post} key={post.id}/>)}
            </div>
        )
    }
}

export default PhotoWall;