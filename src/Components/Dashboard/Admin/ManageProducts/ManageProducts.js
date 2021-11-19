import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const uri = "https://whispering-cliffs-17559.herokuapp.com/products";
        fetch(uri)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);


    const handleDelete = (id) => {
        console.log(id);
        const deleteConfirmation = window.confirm(
            "are you sure, you want to delete your product!!!"
        );
        if (deleteConfirmation) {
            fetch(`https://whispering-cliffs-17559.herokuapp.com/products/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remaining = products?.filter(
                            (product) => product._id !== id
                        );
                        setProducts(remaining);
                    }
                });
        }
    };
    return (
        <div className="products-style">
            <h1 className="text-center"> Manage Products</h1>
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

                                    <button
                                        onClick={() => handleDelete(product?._id)}
                                        className="products-card-button">
                                        delete
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ManageProducts;