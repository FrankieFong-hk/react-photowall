import Main from "./Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removePost } from "../redux/actions";

function mapStateToProps(state) {
    return {
        posts: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({removePost}, dispatch);
    
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)


export default App;
//this.props.posts

// removePhoto = (postRemoved) => {
//     this.setState((state) => ({
//         posts: state.posts.filter(post => post != postRemoved)
//     }))
// }

// addPhoto = (postSubmitted) => {
//     console.log(postSubmitted);
//     this.setState((state) => ({
//         posts: state.posts.concat([postSubmitted])
//     }))
// }