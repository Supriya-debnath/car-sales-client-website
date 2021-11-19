import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';
import './Review.css';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState(5);
    const {user} = useAuth();

    const onSubmit = (data) => {
        data.rating = rating;
        console.log(data);
        const uri = "http://localhost:5000/reviews";
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
                    alert("added review successfully");
                    reset();
                }
            });
    };

    return (
        <div className="review-form">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-50 mx-auto for-shadow py-3"
            >
                <h2>Please Give a Review</h2>

                <input {...register("name")} 
                defaultValue={user?.displayName}
                readOnly
                 />

                <input
                    {...register("img")}
                    placeholder="Your img Url"
                    required
                />
               
                <textarea
                    {...register("review")}
                    placeholder="Write your feedback here"
                    required
                />
                 <h4>Your Rating</h4>
                 <Rating 
                    className="text-primary"
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    onChange={(rate) => setRating(rate)}
                    rating={rating}
                    fractions={2}
                
                />
                <h4 className="d-inline-block">{rating}</h4>
                <input type="submit" className="confirmbutton" />
            </form>
        </div>
    );
};

export default Review;