import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../API";


export default function TeacherExam(){
const token = Cookies.get('kids_pre_token')
const navigate = useNavigate();

const [getTeacherExam, setTeacherExam]=useState();

useEffect(()=>{
    if (token == undefined || token == null || token ==""){
        navigate ('/login')
    }
},[token])

const ExamDetails=()=>{
    axios.get(`${API}exam/:teacherid`,{
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then(result =>{
        setTeacherExam(result.data.data)
    }
).catch(error => {
    console.error("there was on error fetching exam detail",error)
})
}
useEffect(()=>{
    ExamDetails()
},[0])


return (
    <>
    <table className="table">
        <thead className="thead-dark">
            <tr>
                <th>Sr.No.</th>
                <th>Class</th>
                <th>Subject</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            {getTeacherExam && getTeacherExam?.map((rows, key)=>(
                <tr key={key}>
                    <td scope="rows">{key}</td>
                    <td>{rows.classes}</td>
                    <td>{rows.subjectname}</td>
                    <td>{rows.time}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
)
}