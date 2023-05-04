import React from "react";
import { useNavigate } from "react-router-dom"

const AddPhoto = (props) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const imageLink = e.target.elements.link.value;
        const description = e.target.elements.description.value;

        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }

        if(imageLink && description){
            props.onAddPhoto(post)
            navigate('/')
        }
    }

    return(
        <div>
            <h1>PhotoWall</h1>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button> Post </button>
                </form>
            </div>
        </div>
    )
}

export default AddPhoto;