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
    
    if(props.loading === true) {
        return <div className="loader">Loading</div>
    } else if(post){
        return(
            <div className="single-photo">
                <Photo post={post} {...props} index={index}/>
                <Comments startAddingComment={props.startAddingComment} comments={comments} id = {id}/>
            </div>
        )
    }else{
        return <h1 className="loader">No Post Found</h1>
    }
}

export default Single;