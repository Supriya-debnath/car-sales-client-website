import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./PlaceForm.css";

const PlaceForm = (props) => {
    const { name, price } = props.order;
    const { user } = useAuth();
    // console.log(user);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        data.status = "pending";
        const uri = "http://localhost:5000/orders";
        fetch(uri, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("place order successfully");
                }
                reset();
            });
    };
    useEffect(() => {
        reset();
    }, [props, reset, user]);
    return (
        <div className="confirm-form w-75  mx-auto py-3">
            <h2 className="text-center">Confirm Order</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                {
                    user?.displayName &&
                     <input
                    {...register("name")}
                    type='text'
                    readOnly
                    defaultValue={user?.displayName}
                />
                }
                <input {...register("email")}
                type='text' 
                readOnly
                defaultValue={user?.email} 
                />
                <input {...register("title")}
                type='text' 
                readOnly
                defaultValue={name} 
                />
                <input {...register("price")}
                type='text' 
                readOnly
                defaultValue={price} 
                />

                <input
                    {...register("address")}
                    placeholder="Enter your address"
                   
                />
                <input
                    type="text"
                    {...register("phoneNumber")}
                    placeholder="Enter your number"
                   
                />
                <input type="submit" className="confirmbutton" />
            </form>
        </div>
    );
};

export default PlaceForm;