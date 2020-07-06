import React from 'react';
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import './TaskItem.scss'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {useDispatch, useSelector} from "react-redux";
import {deleteItem, setCurrentItem} from "../../actions/creators";

const TaskItem = ({item}) => {
    const {text, comments, id}=item;
    const dispatch=useDispatch();

    const chooseItem=(item, ev)=>{
        if(ev.target.name==='deleteTask') {
            return false
        }
        dispatch(setCurrentItem(item));
    }
    const currentItem=useSelector(state=>state.item);
    const allItems=useSelector(state=>state.tasks);
    const handleDelete=()=>{
        dispatch(deleteItem(item))
        dispatch(setCurrentItem(allItems[0]))
    }
    return (

        <Container className={currentItem.id===id? 'task-item active':'task-item'}
                   key={id}
                   id={id}
                   onClick={(ev)=>chooseItem(item, ev)}
        >
            <Col lg={6} md={6} className='task-item__text'>
                {text}
            </Col>
            <Col lg={2} md={2} className='task-item__comment-counter'>
                <Badge variant="info">{comments.length || 0}</Badge>
            </Col>
            <Col lg={4} md={4} className='task-item__actions'>
                <Button
                    variant="outline-danger"
                    type='button'
                    size="sm"
                    name='deleteTask'
                    onClick={()=>handleDelete()}
                >Delete</Button>
            </Col>
        </Container>
    );
};

export default TaskItem;
