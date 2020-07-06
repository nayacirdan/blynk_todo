import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import CommentItem from "../CommentItem/CommentItem";
import {useSelector} from "react-redux";

const CommentsList = () => {
    const commentsList=useSelector(state=>state.item.comments);

    let listItems='No comments now'
    if (commentsList && commentsList.length>0){
        listItems= commentsList.map((item) => (
            <ListGroup.Item>
                <CommentItem text={item.text} color={item.color}/>
            </ListGroup.Item>)
        )
    }

    return (
        <div className='list-container'>
            <ListGroup>
                {listItems}
            </ListGroup>
        </div>
    );
};

export default CommentsList;
