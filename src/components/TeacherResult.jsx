import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../API";

export default function TeacherResult(){
    const token = Cookies.get('kids_pre_token')
    const navigate = useNavigate();

    const [getTeacherResult, setTeacherResult]= useState()

    useEffect(()=>{
        if(token == undefined || token == null || token == ""){
            navigate ('/login')
        }
    },[token])

    const ResultDetails =()=>{
        axios.get(`${API}teacher/result`,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(result=>{
            setTeacherResult(result.data.data)
        }
    ).catch(error=>{
        console.error("There was on error fetching result details",error)
    });
    }
    useEffect(()=>{
        ResultDetails()
    },[0])

    return (
    <>
    <table className="table">
        <thead className="thead-dark">
            <tr>
                <th>Sr.No.</th>
                <th>Class</th>
                <th>Student Name</th>
                <th>Result</th>
                <th style={{textAlign:"center"}}>Action</th>
            </tr>
        </thead>
        <tbody>
            {getTeacherResult && getTeacherResult?.map((rows,key)=>(
                <tr key={key}>
                    <td scope="rows">{key}</td>
                    <td>{rows.className}</td>
                    <td>{rows.studentName}</td>
                    <td>{rows.result}</td>
                    <td style={{textAlign:"center"}}><Link to={`/result-summary/${rows.studentId}`}><button className="btn btn-primary" >View Marks</button></Link></td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
)

}