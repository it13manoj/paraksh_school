import axios from "axios";
import react, { useEffect, useState } from "react";
import { API } from "../API";

export default function Contact(){
    const [getContact, setContact]=useState()

    const dataDetails = {
    title: "Contact",

  }

    const loadContact=()=>{
        axios.get(`${API}contacts`).then(response=>{
            setContact(response.data.data)
        })
    }

    useEffect(()=>{
        loadContact()
    },[0])

    console.log(getContact)
    return (
        <>
        <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center pb-2">
                <p className="section-title px-5"><span className="px-2">{getContact?.[0]?.heading1}</span></p>
                <h1 className="mb-4">{getContact?.[0]?.heading2}</h1>
            </div>
            <div className="row">
                <div className="col-lg-7 mb-5">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" rows="6" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 mb-5">
                    <p>{getContact?.[0]?.discription}</p>
                    <div className="d-flex">
                        <i className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{width: '45px', height: '45px'}}></i>
                        <div className="pl-3">
                            <h5>Address</h5>
                            <p>{getContact?.[0]?.address}</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <i className="fa fa-envelope d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{width: '45px', height: '45px'}}></i>
                        <div className="pl-3">
                            <h5>Email</h5>
                            <p>{getContact?.[0]?.email}</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <i className="fa fa-phone-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{width: '45px', height: '45px'}}></i>
                        <div className="pl-3">
                            <h5>Phone</h5>
                            <p>{getContact?.[0]?.phone}</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <i className="far fa-clock d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{width: '45px', height: '45px'}}></i>
                        <div className="pl-3">
                            <h5>Opening Hours</h5>
                            <p>{getContact?.[0]?.opening_hour}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}