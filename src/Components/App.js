import Main from "./Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import  withRouter  from "./WithRouter";




function mapStateToProps(state) {
    return {
        posts: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
    
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));


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