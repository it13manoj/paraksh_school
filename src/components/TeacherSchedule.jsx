import axios from "axios";
import react, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { API } from "../API";
import { Link, useNavigate } from "react-router-dom";

export default function TeacherSchedule(){
    const token = Cookies.get('kids_pre_token')
    const navigator = useNavigate()
    const [getTeacherSchedule, setTeacherSchedule]=useState()

    useEffect(()=>{
        if(token == undefined || token == null || token == ""){
            navigator('/login')
        }
    },[token])

    const TechSchedule=()=>{
        axios.get(`${API}classes`,{
            headers:{
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        }).then(result=>{
            setTeacherSchedule(result.data.result)
        }
    ).catch(error=>{
        console.error("There was on error fetching schedule details",error)
    })
    }

    useEffect(()=>{
        TechSchedule()
    },[0])

return (
    <>
    <table className="table">
        <thead className="thead-dark">
            <tr>
                <th>Sr.No.</th>
                <th>Class</th>
                <th style={{textAlign:"center"}}>Action</th>
            </tr>
        </thead>
        <tbody>
            {getTeacherSchedule && getTeacherSchedule?.map((rows, index)=>(
            <tr>
                <td key={index}>{index+1}</td>
                <td>{rows.classes}</td>
                <td style={{textAlign:"center"}}><Link to={`/schedule-summary`}><button className="btn btn-primary">View Schedule Details</button></Link></td>
            </tr>
            ))}
        </tbody>
    </table>
    </>
)
}