import React from 'react';
import BlockContainer from "../BlockContainer/BlockContainer";
import Items from "../Items/Items";
import Comments from "../Comments/Comments";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './Main.scss'

const Main = () => {
    return (
        <Col lg={10} md={10} xs={12} className='main'>
            <Container className='main__container'>
                <Row className='main__row'>
                    <BlockContainer component={<Items/>}/>
                    <BlockContainer component={<Comments/>}/>
                </Row>
            </Container>

        </Col>
    );
};

export default Main;
