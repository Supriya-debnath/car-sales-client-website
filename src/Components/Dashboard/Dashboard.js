import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddProducts from './Admin/AddProducts/AddProducts';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import ManageOrders from './Admin/ManageOrders/ManageOrders';
import ManageProducts from './Admin/ManageProducts/ManageProducts';
import MyOrder from './User/MyOrder/MyOrder';
import Payment from './User/Payment/Payment';
import Review from './User/Review/Review';

const Dashboard = () => {
    const {path, url} = useRouteMatch();
    const {admin, logOut} = useAuth();

    return (
        <div>
            <Container fluid>
                <Tab.Container>
                    <Row xs={1} sm={1} md={2} lg={2}>
                        <Col xs={12} sm={12} md={4} lg={3}>
                        <div className="bg-light rounded-3 py-4 border" style={{ minHeight: '80vh', position: 'sticky', top: '114px' }}>

                        <Nav className="flex-column">
                           {
                               admin?
                          
                                <>
                                <Link to={`${url}`}>Dashboard</Link>
                                <Link to={`${url}/add-product`}>Add Product</Link>
                                <Link to={`${url}/manage-products`}>Manage Products</Link>
                                <Link to={`${url}/manage-orders`}>Manage Orders</Link>
                                <Link to={`${url}/make-admin`}>Make Admin</Link>
                                <Link to='/login' onClick={logOut}>Logout</Link>
                                </>
                                :
                                <>
                                <Link to={`${url}`}>Dashboard</Link>
                                <Link to={`${url}/my-orders`}>My Orders</Link>
                                <Link to={`${url}/payment`}>Payment</Link>
                                <Link to={`${url}/review`}>Review</Link>
                                <Link to='/login' onClick={logOut}>Logout</Link>
                                </>
                        
                           }
                            </Nav>
                            </div>
                            
                        </Col>

                        <Col xs={12} sm={12} md={8} lg={9} xl={9}>
                            <div>
                                <Switch>
                                    <Route exact path={path}>
                                        <div>
                                            <Container>
                                                <h2>Welcome to Dashboard</h2>
                                            </Container>
                                        </div>
                                    </Route>

                                    {/* Admin Route */}
                                    <Route path={`${path}/add-product`}>
                                        <AddProducts></AddProducts>
                                    </Route>
                                    <Route path={`${path}/manage-products`}>
                                        <ManageProducts></ManageProducts>
                                    </Route>
                                    <Route path={`${path}/manage-orders`}>
                                        <ManageOrders></ManageOrders>
                                    </Route>
                                    <Route path={`${path}/make-admin`}>
                                       <MakeAdmin></MakeAdmin>
                                    </Route>

                                    {/* User Route */}
                                    <Route path={`${path}/my-orders`}>
                                        <MyOrder></MyOrder>
                                    </Route>
                                    <Route path={`${path}/payment`}>
                                        <Payment></Payment>
                                    </Route>
                                    <Route path={`${path}/review`}>
                                        <Review></Review>
                                    </Route>

                                </Switch>
                            </div>

                        </Col>
                    </Row>

                </Tab.Container>

            </Container>
            
        </div>
    );
};

export default Dashboard;