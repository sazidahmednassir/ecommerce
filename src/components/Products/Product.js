import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../Rating/Rating';

const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product.id}`}>
                <Card.Img src={product.img} variant='top'></Card.Img>
            </a>
            <Card.Body>
            <a className='text-decoration-none' href={`/product/${product.id}`}>
                <Card.Title as='div'><strong >{product.name}</strong></Card.Title>
            </a>

            <Card.Text as='div'>
                <div className="my-3">
                    <Rating rate={product.ratings} view={`${product.numReviews} reviews`} color={'red'}/>
                    
                </div>
            </Card.Text>

            <Card.Text as='h3'>${product.price}</Card.Text>

            </Card.Body>
            
        </Card>
    );
};

export default Product;