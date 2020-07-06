import React from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const CommentItem = ({text, color}) => {
    return (
        <Container className='comment-item'>
            <Row>
                <Col lg={2} md={2} className='comment-item__color' style={{backgroundColor:color}}>

                </Col>
                <Col lg={10} md={10} className='comment-item__text-field'>
                    {text || 'mysometext'}
                </Col>
            </Row>

        </Container>
    );
};

export default CommentItem;
