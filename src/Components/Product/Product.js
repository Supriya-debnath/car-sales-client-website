import React, { useContext } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Product.css';


const Product = ({product}) => {
    console.log(product);

    const {_id, name, description, spreed, price, img} = product;
    const {setCart} = useContext(UserContext)
    
    return (
     
      <Col>
      <Card>
        <Card.Img variant="top" className="img" src={img} />
        <Card.Body className="details">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
                <p style={{color: "salmon"}}> <span>NEW CAR/ AUTOMATIC/ SPORTS</span> </p>
                <h6>Speed: {spreed}</h6>
                <h5>Price: ${price}</h5>
            <Button as={Link} to={`/placeOrder/${_id}`} onClick={()=>setCart(product)}  className="service-btn">Order Now</Button>
        </Card.Body>
      </Card>
    </Col>
      













    //     <Col>
    //     <Card className="shadow mb-4">
    //       <div className="d-flex align-items-center p-2">
    //         <Card.Img
    //           className="w-100 pt-3"
    //           style={{ objectFit: "contain", height: "300px" }}
    //           variant="top"
    //           src={img}
    //         />
    //       </div>
    //       <Card.Body>
    //         <Card.Title>{name}</Card.Title>
    //         <Card.Text>{description}</Card.Text>
    //         <p style={{color: "salmon"}}> <span>NEW CAR/ AUTOMATIC/ SPORTS</span> </p>
    //         <h3>{spreed}</h3>
    //         <h3>$ {price}</h3>
    //         <Button className="service-btn">Order Now</Button>
    //       </Card.Body>
    //     </Card>
    //   </Col>
        
    );
};

export default Product;