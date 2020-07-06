import React, {useEffect} from 'react';
import './App.scss';
import Main from "./components/Main/Main";
import SideBar from "./components/Sidebar/Sidebar";
import Row from "react-bootstrap/Row";
import {connect, useDispatch} from "react-redux";
import {getToDoFromLS} from "./actions/creators"

const App = ({tasks}) => {
    const dispatch=useDispatch();

    const getToDo=()=>{
        const toDo=localStorage.getItem('TODO');
        if(toDo && toDo !=='[]') {
            dispatch(getToDoFromLS(toDo)); //
        }
    };

    useEffect(() => {
        getToDo();
    }, []);



    window.addEventListener("beforeunload", (ev) =>
    {
        ev.preventDefault();
        localStorage.setItem('TODO', JSON.stringify(tasks));
        return 'String for browsers without preventDefault activation'
    });




    return (
        <div className="App">
            <Row className='app-row'>
                <SideBar/>
                <Main/>
            </Row>
        </div>
    );
}
const mapStoreToProps=(state)=>{
    return {
        tasks: state.tasks
    }
}

export default connect(mapStoreToProps,null)(App);
