import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import TaskItem from "../TaskItem/TaskItem";
import {useSelector} from "react-redux";

const TaskList = () => {
    const listItemsArr=useSelector((state)=>state.tasks);

    const listItems = listItemsArr.map((item) => (
        <ListGroup.Item className='list-item'>
            <TaskItem item={item}/>
        </ListGroup.Item>)
    )
    return (
        <div className='list-container'>
            <ListGroup>
                {listItems}
            </ListGroup>
        </div>
    );
};

export default TaskList;
