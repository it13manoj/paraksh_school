import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../API";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Exam(){
    const token = Cookies.get('kids_pre_token')
    const navigate = useNavigate()
    
    const [getexamDetails, setexamDetails] = useState();

        useEffect(() => {
            if (token == undefined || token == null || token == "") {
                navigate('/login');
            }
        }, [token])

    
    const dataDetails = () => {
        axios.get(`${API}student/exam`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(result => {
            setexamDetails(result.data.data);
        }
        ).catch(error => {
            console.error("There was an error fetching class details!", error);
        });

    }
    useEffect(()=>{
        dataDetails()
    },[0])

    console.log(getexamDetails)

    return (
        <>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    {/* <th scope="col">Student Name</th> */}
                    <th scope="col">Class</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Time</th>
                </tr>
            </thead>
            <tbody>
                    {getexamDetails && getexamDetails?.map((rows, key) => (
                        <tr key={key}>
                            <th scope="row">{key}</th>
                            {/* <td>{rows.name}</td> */}
                            <td>{rows.ClassName}</td>
                            <td>{rows.SubjectName}</td>
                             <td>{rows.ExamTime}</td>
                        </tr>
                    ))}

                </tbody>
        </table>
        </>
    )
}
export default Exam