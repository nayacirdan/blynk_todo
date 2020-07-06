import React from 'react';
import Col from "react-bootstrap/Col";
import './BlockContainer.scss'

const BlockContainer = ({component}) => {
    return (
        <Col lg={5} md={5} xs={12} className='block-container'>
            {component}
        </Col>
    );
};

export default BlockContainer;
