import axios from "axios";
import React, { useEffect, useState } from "react";
import { API, Images } from "../API";

function Gallery() {
    const [getGallery, setGallery] = useState()

    const dataDetails = {
    title: "Gallery",

  }

    const loadGallery = () => {
        axios.get(`${API}gallery`).then(response => {
                    
            setGallery(response.data.data[0])
        })
    }

    useEffect(() => {
        loadGallery()
    }, [0]);


    console.log(getGallery);

    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5"><span className="px-2">{getGallery?.heading1}</span></p>
                        <h1 className="mb-4">{getGallery?.heading2}</h1>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mb-2">
                            <ul className="list-inline mb-4" id="portfolio-flters">
                                <li className="btn btn-outline-primary m-1 active" data-filter="*">All</li>
                                <li className="btn btn-outline-primary m-1" data-filter=".first">Playing</li>
                                <li className="btn btn-outline-primary m-1" data-filter=".second">Drawing</li>
                                <li className="btn btn-outline-primary m-1" data-filter=".third">Reading</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container">
                        {getGallery && getGallery?.images?.map((rows, i)=>(
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item first" key={i}>
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid w-100" src={Images+"/"+rows?.image} alt=""/>
                                    <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                        <a href={rows?.image} data-lightbox="portfolio">
                                            <i className="fa fa-plus text-white" style={{fontSize:"60px"}}></i>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery;