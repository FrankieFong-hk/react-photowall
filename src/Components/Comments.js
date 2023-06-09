import React from "react";


const Comments = (props) => {

    // constructor() {
    //     super();
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    const handlerSubmit = (e) => {
        e.preventDefault();
        const comment = e.target.elements.comment.value;
        props.startAddingComment(comment, props.id);
        e.target.elements.comment.value = "";
    };
    console.log(props.comments)
    return(
        
        <div className="comment">
            {
                props.comments.map((comment, index) => {
                    return (
                        <p key={index}> {comment} </p>
                    )
                })
            }
           <form className="comment-form" onSubmit={handlerSubmit}>
                <input type="text" placeholder="cooment" name="comment"/>
                <input type="submit" hidden/>
           </form>
        </div>
    )
}

export default Comments;