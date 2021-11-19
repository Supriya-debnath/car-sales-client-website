import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Explore = () => {
    const [products, setProducts] = useState([]);
    const {setCart} = useContext(UserContext);



    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);
    

    return (
        <div className="products-style">
            <h2 style={{color: 'salmon', marginTop: '40px'}}>Buy Your Dream Car</h2>
             <p style={{color: 'gray', margin: '20px'}}> Vehicle technology has become more sophisticated <br /> than ever over the past decade. </p>
       
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {products.map((product) => (
                        <Col key={product._id}>
                            <Card className="products-card-style">
                                <Card.Img
                                    variant="top"
                                    src={product.img}
                                    className="products-card-img"
                                />
                                <Card.Body>
                                    <Card.Title className="products-card-title">
                                        {product.name}
                                    </Card.Title>
                                    <Card.Text className="products-card-para">
                                        {product.description?.slice(0, 170)}...
                                    </Card.Text>
                                    <Card.Text className="products-card-para">
                                        Price: ${product.price}
                                    </Card.Text>

                                    <Button as={Link} to={`/orders/${product._id}`} onClick={()=>setCart(product)}  className="service-btn">Order Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Explore;