import React from "react";
import { useParams } from 'react-router-dom';
import Photo from "./Photo";
import Comments from "./Comments";

const Single = (props) => {
    const posts = props.posts;
    const {id} = useParams();
    const post = posts.find((post) => post.id === Number(id));
    
    const comments = props.comments[id] || [];

    const index = posts.findIndex((post) => post.id === Number(id));
    
    console.log(index);
    return(
        <div className="single-photo">
            <Photo post={post} {...props} index={index}/>
            <Comments addComment={props.addComment} comments={comments} id = {id}/>
        </div>
    )
}

export default Single;