import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import PlaceForm from "../PlaceForm/PlaceForm";
import "./PlaceOrder.css";

const PlaceOrder = () => {
    const { id } = useParams();

    const [order, setOrder] = useState({});
    useEffect(() => {
        const uri = `https://whispering-cliffs-17559.herokuapp.com/products/${id}`;
        fetch(uri)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [id]);

    return (
        <>
           
            <div className="place-order py-5">
                <h2 className="text-center my-4 place-order-header">
                    Your Order Information
                </h2>
                <Container>
                    <Row>
                        <Col
                            md={6}
                            xs={12}
                            className="text-center left-div my-3"
                        >
                            <img
                                src={order?.img}
                                alt=""
                                className="img-size pt-3"
                            />
                            <h2 className="products-card-title my-3">
                                Name: {order?.name}
                            </h2>
                            <p className="products-card-para">
                                {order?.description}
                            </p>
                            <p className="products-card-para">
                                price: $ {order?.price}
                            </p>

                        </Col>
                        <Col md={6} xs={12} className="my-3">
                            <PlaceForm order={order}></PlaceForm>
                        </Col>
                    </Row>
                </Container>
            </div>
           
        </>
    );
};

export default PlaceOrder;