import React, {Component} from "react";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route, Routes, Link} from "react-router-dom";
import Single from "./Single";
  

class Main extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        }
    }

    render() {

        return(
            <div>
                <h1>
                    <Link to="/">PhotoWall</Link>
                </h1>
                <Routes>
                    <Route exact path="/" element={
                        <>
                        
                            {/* post = props.post, remove = props.remove */}
                            <PhotoWall {...this.props} /> 
                            {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/> */}
                        </>    
                    }/>


                    <Route path="/AddPhoto" element={
                        <AddPhoto {...this.props}/>

                    }/>

                    <Route path="/single/:id" element={
                        
                        <Single {...this.props}/>
                    }/>
                </Routes>
            </div>


        )
    }
}

// function SimulateFetchFromDatabase() {
//     return (
//         [{
//         id: 0,
//         description: "beautiful landscape",
//         imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//         "3919321_1443393332_n.jpg"
//         }, {
//         id: 1,
//         description: "Aliens???",
//         imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
//         }, {
//         id: 2,
//         description: "On a vacation!",
//         imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//         }]
//     )
// }

export default Main;
