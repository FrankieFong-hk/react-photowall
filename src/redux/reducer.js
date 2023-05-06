import posts from "../data/post";

const postReducer = function postsReducer(state = posts, action) {

    switch (action.type){
        case 'REMOVE_POST':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];

        case 'ADD_POST':
            return [...state, action.post];

        default:
            return state;    

    }
    return state;
    //removePhoto action
}

export default postReducer