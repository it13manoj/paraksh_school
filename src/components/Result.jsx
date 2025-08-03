import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../API";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";


export default function Result() {
    const token = Cookies.get('kids_pre_token');
    const navigate = useNavigate();

    const [getResultDetails, setResultDetails] = useState();
    const location = useLocation();
    const [getStudentResult, setStudentResult] = useState();

    useEffect(() => {
        if (token == undefined || token == null || token == "") {
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        console.log(location.pathname.split("/"))
        if (location.pathname.split("/").slice(-1)[0] && location.pathname.split("/").length > 2) {
            setStudentResult(location.pathname.split("/").slice(-1)[0]);
        }
    }, [0])

    const getResult = () => {
        if (getStudentResult) {
            axios.get(`${API}result/assign_result/${getStudentResult}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then(result => {
                setResultDetails(result.data.data)
            }
            ).catch(error => {
                console.error("There was on error fetching class details!", error)
            });
        } else if( location.pathname.split("/").length < 3) {
      
            axios.get(`${API}result`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => {
                    console.log(response)
                    setResultDetails(response.data.data)
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };
    useEffect(() => {
        if (token) {
            getResult();
        }
    }, [getStudentResult])


    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Sr.No.</th>
                        <th scope="col">Class</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {getResultDetails && getResultDetails?.map((rows, key) => (
                        <tr key={key}>
                            <th scope="row">{key}</th>
                            <td>{rows.classes}</td>
                            <td>{rows.name}</td>
                            <td>{rows.subjectName}</td>
                            <td>{rows.marks}</td>                            
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}