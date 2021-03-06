import React from 'react';
import { Col, Row } from 'react-bootstrap';
import services from '../../../src/services.json';
import Product from '../Products/Product';

const Home = () => {
    return (
        <>
            <h1 className='py-3 text-center'>New Collection</h1>
            <Row>
                {
                    services.map(product=>(
                        <Col sm={12} md={6} lg={4} xl={4}>
                        <Product key={product.id} product={product}></Product>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
};

export default Home;