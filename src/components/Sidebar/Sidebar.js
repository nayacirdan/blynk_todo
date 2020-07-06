import React from 'react';
import Col from "react-bootstrap/Col";
import './Sidebar.scss'
import Container from "react-bootstrap/Container";
const SideBar = () => {
    return (
        <Col lg={2} md={2} xs={12} className='sidebar'>
            <Container>
                <h1 className='sidebar__logo'>Dayry App</h1>
                <span className='sidebar__promo'>Comment whit no sense</span>
            </Container>
        </Col>
    );
};

export default SideBar;
