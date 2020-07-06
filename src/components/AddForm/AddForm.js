import React from 'react';
import './AddForm.scss'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AddForm = ({children, formClassName, formName, onSubmit, onKeyDown}) => {
    return (
        <Container className='add-form'>
            <Row className='add-form__row'>
                <Col lg={12} md={12} xs={12} className='add-form__col'>
                    <form className={formClassName} name={formName} onSubmit={onSubmit} onKeyDown={onKeyDown}>
                            <Row className='form-row'>
                                {children}
                            </Row>
                    </form>
                </Col>

            </Row>

        </Container>
    );
};

export default AddForm;
