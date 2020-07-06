import React from 'react';
import AddForm from "../AddForm/AddForm";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TaskList from "../TaskList/TaskList";
import Col from "react-bootstrap/Col";
import './Items.scss'
import {useDispatch} from "react-redux";
import {randomInteger} from "../../utils/todoUtil"
import {addItem} from "../../actions/creators"

const Items = ({listItemsArr}) => {
    const dispatch=useDispatch();

    const handleSubmit=(ev)=>{
        ev.preventDefault();
        const itemName=ev.currentTarget.newItemName.value;
        ev.currentTarget.newItemName.value="";
        const itemId=randomInteger(1000, 100000);
        const newItem={
            text:itemName,
            id:itemId,
            commentsCounter:0,
            comments:[]
        }
        dispatch(addItem(newItem))
    }

    return (
        <div className='items'>
            <h2 className='comments__heading'>Items</h2>
            <AddForm formClassName='add-new-items-form'
                     formName='items-form'
                     onSubmit={(ev)=>handleSubmit(ev)}
                     children={[

                         <Col lg={7} md={7} xs={7}>
                             <Form.Control required as='input' placeholder='Type name here...' name='newItemName'/>
                         </Col>,

                         <Col lg={5} md={5} xs={5} className='last-col'>
                             <Button
                                 className='btn btn-add-new btn-add-new--item'
                                 variant='dark-primary'
                                 value='Add New'
                                 type='submit'>
                                 Add New
                             </Button>
                         </Col>

                     ]}/>
            <TaskList listItemsArr={listItemsArr}/>

        </div>
    );
};

export default Items;
