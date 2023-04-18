import posts from "../data/post";

const postReducer = function postsReducer(state = posts, action) {
    console.log(action.index)

    switch (action.type){
        case 'REMOVE_POST':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];


        default:
            return state;    

    }
    return state;
    //removePhoto action
}

export default postReducer