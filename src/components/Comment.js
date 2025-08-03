import axios from "axios";
import React, { useEffect, useState } from "react";
import { API, Images } from "../API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Comment() {
    const [getComment, setComment] = useState()
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    const loadComment = () => {
        axios.get(`${API}comments`).then(response => {
            setComment(response.data.data)
        })
    }

    useEffect(() => {
        loadComment()
    }, [0])


    return (
        <>
            <div className="container-fluid py-5">
                <div className="container p-0">
                    <div className="text-center pb-2">
                        <p className="section-title px-5"><span className="px-2">Testimonial</span></p>
                        <h1 className="mb-4">What Parents Say!</h1>
                    </div>
                    <div className="container py-5">
                        <Slider {...settings}>
                            {getComment?.map((rows, i) => (
                                <div className="testimonial-item px-3" key={i}>
                                    <div className="bg-light shadow-sm rounded mb-4 p-4">
                                        <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                                        {rows?.discription}
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle"
                                            src={
                                                rows?.images?.[0]?.image
                                                    ? `${Images}/${rows.images[0].image}`
                                                    : "img/default.png"
                                            }
                                            style={{ width: "70px", height: "70px" }}
                                            alt="Parent"
                                        />
                                        <div className="pl-3">
                                            <h5>{rows?.name}</h5>
                                            <i>{rows?.degination}</i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Comment