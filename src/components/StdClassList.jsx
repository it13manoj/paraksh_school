import axios from "axios";
import react, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { API } from "../API";
import { Link, useNavigate } from "react-router-dom";

export default function StdClassList(){
    const token = Cookies.get('kids_pre_token')
    const navigator = useNavigate()
    const [getStdClassList, setStdClassList]=useState()

    useEffect(()=>{
        if(token == undefined || token == null || token == ""){
            navigator('/login')
        }
    },[token])

    const StdList=()=>{
        axios.get(`${API}classes`,{
            headers:{
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        }).then(result=>{
            setStdClassList(result.data.result)
        }
    ).catch(error=>{
        console.error("There was on error fetching schedule details",error)
    })
    }

    useEffect(()=>{
        StdList()
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
            {getStdClassList && getStdClassList?.map((rows, index)=>(
            <tr>
                <td key={index}>{index+1}</td>
                <td>{rows.classes}</td>
                <td style={{textAlign:"center"}}><Link to={`/student-list/${rows.id}`}><button className="btn btn-primary">View Student List</button></Link></td>                
            </tr>
            ))}
        </tbody>
    </table>
    </>
)
}