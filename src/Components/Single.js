import React from "react";
import { useParams } from 'react-router-dom';
import Photo from "./Photo";
import Comments from "./Comments";

const Single = (props) => {
    const posts = props.posts;
    const {id} = useParams();
    const post = posts.find((post) => post.id === Number(id));
    
    const comments = props.comments;
    
    console.log(comments);
    return(
        <div className="single-photo">
            <Photo post={post}/>
            <Comments addComment={props.addComment} comments={comments}/>
        </div>
    )
}

export default Single;