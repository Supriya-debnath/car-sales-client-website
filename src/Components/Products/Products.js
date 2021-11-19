import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://whispering-cliffs-17559.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <h2 style={{color: 'salmon', marginTop: '40px'}}>Buy Your Dream Car</h2>
             <p style={{color: 'gray', margin: '20px'}}> Vehicle technology has become more sophisticated <br /> than ever over the past decade. </p>
       
        <div className="product-container">
             
           <Container className="container__style">
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {
                products.slice(0, 6).map(product => <Product product={product}></Product>)
                 
            }
            </Row>
            </Container>
        </div>
        </div>
    );
};

export default Products;