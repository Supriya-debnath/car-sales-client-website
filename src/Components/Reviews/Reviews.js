import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Autoplay, Pagination } from 'swiper';
import SwiperCore from 'swiper';
import ReviewDetails from '../ReviewDetails/ReviewDetails';


const Reviews = () => {
    SwiperCore.use([Pagination, Autoplay]);
    
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://whispering-cliffs-17559.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setReviews(data);
        })
    }, []);

    
    
    return (
        <div>
            <h2 style={{color: 'salmon'}}>Clients Review</h2>
            <Card>
            <Swiper
                loop={true}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 2,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
                          
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={10}
    >
        {reviews.map((review) =>{
            return(
                <SwiperSlide key={review._id}>
                    <ReviewDetails review={review}></ReviewDetails>
                </SwiperSlide>  
            )
        } )}

    </Swiper>
            </Card>
        </div>
    );
};

export default Reviews;