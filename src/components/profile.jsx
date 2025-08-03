import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { API, Images } from "../API";
import "./reg.css"

export default function Profile() {
    const token = Cookies.get('kids_pre_token');
    const navigate = useNavigate();
    const location = useLocation();
    const [userData, setuserData] = useState();
    const [getStudentProfile, setStudentProfile] = useState();
    useEffect(() => {
        if (token == undefined || token == null || token == "") {
            navigate('/login');
        }
    }, [token])

    useEffect(() => {
        if (location.pathname.split("/").slice(-1)[0]) {
            setStudentProfile(location.pathname.split("/").slice(-1)[0]);
        }
    }, [0]);

    const getProfile = () => {
        if (getStudentProfile) {
            axios.get(`${API}users/student/${getStudentProfile}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then(response => {
                 setuserData(response.data.results)
            }
            ).catch(error => {
                console.error("There was on error fetching class details!", error)
            });
        } else {
            axios.get(`${API}users/profile`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => {
                    setuserData(response.data.results)
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };


    useEffect(() => {
        if (token) {
            getProfile();
        }
    }, [getStudentProfile]);


    return (
        <>
            <div className="container">
                <form method="get" className="myStyle">
                    <div className="row">
                        <div className="col-md-6">
                            <label><b>Name:</b></label>
                            <span> {userData?.name}</span><br />

                            <label><b>Designation:</b></label>
                            <span> {userData?.degination}</span><br />

                            <label><b>Description:</b></label>
                            <span> {userData?.discription}</span><br />

                            <label><b>User's Type:</b></label>
                            <span> {userData?.type}</span><br />

                            <label><b>Gender:</b></label>
                            <span> {userData?.gender}</span><br />

                            <label><b>Date of Birth:</b></label>
                            <span> {userData?.dob}</span><br />

                            <label><b>Address:</b></label>
                            <span> {userData?.address}</span><br />

                            <label><b>Contact:</b></label>
                            <span> {userData?.contact}</span><br />

                            <label><b>Email-id:</b></label>
                            <span> {userData?.email}</span><br />

                            <label><b>Social Link:</b></label>
                            <span> {userData?.socialLink}</span><br />



                            <div className="mt-3">
                                <button type="button" className="btn btn-primary me-2">Update</button>
                                <button type="button" className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div style={{ border: '1px solid #ccc', padding: '10px', width: '180px', marginTop: '10px' }}>

                                {userData?.image ? (
                                    <img src={Images + "/" + userData?.image} alt="User" style={{ width: '150px', height: '150px' }} />
                                ) : (
                                    <span> No Photo </span>
                                )}
                            </div>
                            <label><b>Photo: {userData?.name}</b></label><br />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
