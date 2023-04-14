import React, {Component} from "react";
import List from "./List";
import Title from "./Title";

class Main extends Component {
    render() {
        return(
            <div>
                <Title title={'toDos'}/>
                <List tasks={['task1', 'task2']}/>
                <List tasks={['task3', 'task4']}/>
            </div>
        )
    }
}

export default Main;
