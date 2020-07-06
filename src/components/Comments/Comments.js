import React from 'react';
import CommentsList from "../CommentsList/CommentsList";
import AddForm from "../AddForm/AddForm";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import './Comments.scss'
import {useDispatch, useSelector} from "react-redux";
import {addCommentToCurrent} from "../../actions/creators";

const Comments = () => {

    const currentItem=useSelector(state=>state.item);
    const dispatch=useDispatch();

    const handleSubmit=(ev)=>{
        ev.preventDefault();
        const commentText=ev.currentTarget.newCommentText.value;
        const commentColor=ev.currentTarget.newCommentColor.value;
        ev.currentTarget.newCommentText.value="";
        ev.currentTarget.newCommentColor.value="#000000";
        const newComment={
            color: commentColor,
            text: commentText
        }

        dispatch(addCommentToCurrent(newComment));

    }

    const ctrlEnter=(ev)=>{
        const formElem=ev.currentTarget;
        if(ev.ctrlKey && ev.keyCode === 13)
        {
            formElem.submitBtn.click();
        }
    }
    return (
        <div className='comments'>
            <h2 className='comments__heading'>Comments #{currentItem.id}</h2>
            <CommentsList/>
            <AddForm
                formClassName='add-new-comment-form'
                formName='comments-form'
                onSubmit={(ev)=>handleSubmit(ev)}
                onKeyDown={(ev)=>ctrlEnter(ev)}
                children={[

                <Col lg={2} md={2} xs={2}>
                    <input type='color' defaultValue="#000000" name='newCommentColor'/>
                </Col>,

                <Col lg={6} md={6} xs={6}>
                    <Form.Control
                        required
                        as='textarea'
                        placeholder='Enter your comment here'
                        name='newCommentText'
                        defaultValue=''
                        ></Form.Control>
                </Col>,

                <Col lg={4} md={4} xs={4}>
                    <Button
                        variant='dark-primary'
                        className='btn btn-add-new btn-add-new--comment'
                        value='Add New'
                        type='submit'
                    name='submitBtn'>
                        Add New
                    </Button>
                </Col>

            ]}/>
        </div>
    );
};

export default Comments;
