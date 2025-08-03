import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { API } from "../API";
import "./reg.css"

export default function Dashboard() {
    const token = Cookies.get('kids_pre_token');
    const navigate = useNavigate();
    const [role, setRole] = useState();
    const [tiles, setTiles] = useState()
    useEffect(() => {
        if (token == undefined || token == null || token == "") {
            navigate('/login');
        }
    }, [token])

    const getProfile = () => {
        axios.get(`${API}users/profile`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data.results.type)
                setRole(response.data.results.type)
            })
            .catch(err => {
                console.error(err);
            });
    };


    useEffect(() => {
        if (token) {
            getProfile();
        }
    }, [0]);

    useEffect(() => {
        switch (role) {
            case "Student":
                setTiles(["Profile", "Student-Class", "Exam", "Results", "Notification", "Attendance-Report"])
                break;
            case "Teacher":
                setTiles(["Profile","Student-Attendence", "Teacher-Class", "Exams", "Final-Results", "Notification", "Schedule", "ClassWise-Student"])
                break;
            case "Principle":
                setTiles(["Profile","Attendence", "Class", "Exams", "Results", "Schedule", "Notification", "Payment"])
                break;
            default:
                break;
        }
    }, [role])


    console.log(tiles);
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {tiles?.map((rows, index) => (

                        <div className="col-md-3 mb-4" key={index}>
                            <Link to={`/${rows.toLowerCase()}`}>
                                <div className="card" style={{ width: "100%" }}>
                                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">{rows}</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </p>

                                        Go somewhere

                                    </div>
                                </div>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
}
