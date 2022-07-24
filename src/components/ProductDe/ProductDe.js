import React from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import services from '../../../src/services.json';
import Rating from '../Rating/Rating';
import './ProductDe.css';


const ProductDe = ({match}) => {
    const { id } = useParams();
    const product=services.find((p)=>p.id == id)

    
    
    // const product=services.find((p)=>p.id===mat)
    
    
    
    return (
        <>
        
  <Link className='btn btn-light my-3' to='/'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sp" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /> </svg> </Link>

        
           <Row>
            <Col md={6}>
                <Image src={product.img} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>{product.name}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating rate={product.ratings} view={`${product.numReviews} reviews`} color={'red'}></Rating>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: $ {product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item >
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                <strong>${product.price}</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <Row>
                                <Col>Status</Col>
                                <Col>
                                {product.stock>0? 'In Stock':'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item  >
                          <Button className='btn-block w-100' type='button' disabled={product.stock==0}>Add to Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
           </Row>
        </>
    );
};

export default ProductDe;