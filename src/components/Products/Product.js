import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Product = ({product}) => {
    console.log(product.id)
    return (
        <Card className='my-3 p-3 rounded'>
            <NavLink to={`/product/${product.id}`}>
                <Card.Img src={product.img} variant='top'></Card.Img>
            </NavLink>
            <Card.Body>
            <NavLink className='text-decoration-none' to={`/product/${product.id}`}>
                <Card.Title as='div'><strong >{product.name}</strong></Card.Title>
            </NavLink>

            <Card.Text as='div'>
                <div className="my-3">
                    <Rating rate={product.ratings} view={`${product.numReviews} reviews`} color={'red'}/>
                    
                </div>
            </Card.Text>

            <Card.Text as='h3'>${product.price}</Card.Text>
            <Link class="btn btn-primary" to={`/product/${product.id}` }  >Order Now</Link>

            </Card.Body>
            
        </Card>
    );
};

export default Product;