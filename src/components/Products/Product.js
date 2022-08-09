import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Product = ({product}) => {
    // console.log(product._id)
    return (
        <Card className='my-3 p-3 rounded'>
            <NavLink to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'></Card.Img>
            </NavLink>
            <Card.Body>
            <NavLink className='text-decoration-none' to={`/product/${product.id}`}>
                <Card.Title as='div'><strong >{product.name}</strong></Card.Title>
            </NavLink>

            <Card.Text as='div'>
                <div className="my-3">
                    <Rating rate={product.rating} view={`${product.numReviews} reviews`} color={'red'}/>
                    
                </div>
            </Card.Text>

            <Card.Text as='h3'>${product.price}</Card.Text>
            <Link class="btn btn-primary" to={`/product/${product._id}` }  >Order Now</Link>

            </Card.Body>
            
        </Card>
    );
};

export default Product;