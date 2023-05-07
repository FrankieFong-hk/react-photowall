import posts from "../data/post";
import { combineReducers } from "redux";

function commentsReducer(state = [], action) {
    switch (action.type){
        case 'ADD_COMMENT':
            return [...state, action.comment];
        default:
            return state;
    }
    return state;
}

function postsReducer(state = posts, action) {

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

const rootReducer = combineReducers({postsReducer, commentsReducer})

export default rootReducer