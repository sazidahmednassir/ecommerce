import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../Products/Product';

const Home = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        const fetchP= async()=>{
            const {data}= await axios.get('/api/products')
            setProducts(data)

        }
        fetchP()
        
    }, [])
    console.log(products)
    return (
        <>
            <h1 className='py-3 text-center'>New Collection</h1>
            <Row>
                {
                    products.map(product=>(
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