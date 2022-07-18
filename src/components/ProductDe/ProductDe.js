import React from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import services from '../../../src/services.json';
import Rating from '../Rating/Rating';


const ProductDe = ({match}) => {
    const { productid } = useParams();
    const product=services.find((p)=>p.id ==productid)

    
    
    // const product=services.find((p)=>p.id===mat)
    
    
    
    return (
        <>
           <Link className='btn btn-light my-3' to='/'>GO Back</Link>
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