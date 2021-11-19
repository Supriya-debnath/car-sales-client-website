import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {

  const [orders, setOrders] = useState([]);


  useEffect(() => {
    fetch(`https://whispering-cliffs-17559.herokuapp.com/orders`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setOrders(data);
    })
  }, [])

  const handleDelete = id => {
    const deleteConfirmation = window.confirm('Are you sure to delete this order');
    if(deleteConfirmation){
      const url = `https://whispering-cliffs-17559.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then((data) => {
        // console.log(data)
        if(data.deletedCount > 0){
          alert('Orders deleted Successfully');
          const remaining = orders.filter(order => order._id !== id);
          setOrders(remaining);
        }
       
      })
    }
   
  }

    return (
        <div>
            <h2>Manage Orders</h2>
            <Table striped bordered hover variant="dark">
            <thead>
    <tr>
      <th>SL No.</th>
      <th>Title</th>
      <th>User Name</th>
      <th>User Email</th>
      <th>Address</th>
      <th>Phone Number</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>

  {orders.map((order, index) => (
     <tbody>
     <tr>
       <td>{index+1}</td>
       <td>{order.title}</td>
       <td>{order.name}</td>
       <td>{order.email}</td>
       <td>{order.address}</td>
       <td>{order.phoneNumber}</td>
       <td>{order.price}</td>
       <button onClick={() => handleDelete(order._id)}>Delete</button>
     </tr>
   </tbody>
  )
   
  )}
  
</Table>
        </div>
    );
};

export default ManageOrders;