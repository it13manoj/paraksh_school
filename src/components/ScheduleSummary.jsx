import react, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../API";

export default function ScheduleSummary(){
    const token = Cookies.get('kids_pre_token')
    const navigate = useNavigate()
    const [getScheduleSummary, setScheduleSummay]=useState()

    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
   
    useEffect(()=>{
        if(token == undefined || token == null || token == ""){
            navigate('/login')
        }
    },[token])

    const ScheduleSummaryDetail=()=>{
        axios.get(`${API}time`,{
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        }).then(result=>{
            setScheduleSummay(result.data.data)
        }
    ).catch(error=>{
        console.error("There was on error fetching result datails",error)
    })
    }

    useEffect(()=>{
        ScheduleSummaryDetail()
    },[0])

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>Weekly Class Schedule</h2>
            <table style={{width: "100%", borderCollapse: "collapse", textAlign: "center"}} border="1">
                <thead>
                    <tr style={{ background: "#f0f0f0" }}>
                        <th>Time</th>
                        {days.map((day) => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {getScheduleSummary && getScheduleSummary?.map((rows)=>(
                        <tr>
                            <td>{rows.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}