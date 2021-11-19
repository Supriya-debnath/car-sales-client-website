import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      console.log(data)
      axios.post('https://whispering-cliffs-17559.herokuapp.com/products', data)
      .then(res => {
          if(res.data.insertedId){
              alert('One new package successfully added');
          }
      }) 
         
  };


    return (
        <div className="add-product">
        <h2>
            Please Add a product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("name")} placeholder="name"/>
  <textarea {...register("description")} placeholder="description"/>
  <input type="number" {...register("price")} placeholder="price"/>
  <input {...register("img")} placeholder="image url"/>

  <input type="submit" />
</form>
    </div>
    );
};

export default AddProducts;