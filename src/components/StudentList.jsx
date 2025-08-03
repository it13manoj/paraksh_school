import react, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../API";

export default function StudentList() {
    const token = Cookies.get('kids_pre_token')
    const navigate = useNavigate()
    const location = useLocation();
    const [getStudentList, setStudentList] = useState()
    const [getClassId, setClassId] = useState();

    useEffect(() => {
        if (token == undefined || token == null || token == "") {
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (location.pathname.split("/").slice(-1)[0]) {
            setClassId(location.pathname.split("/").slice(-1)[0]);
        }
    }, [0])

    const handleview = (rows) => {
        if (rows) {
            axios.get(`${API}student_class/${rows}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then(result => {
                setStudentList(result.data.data)
                console.log(result.data)
            }
            ).catch(error => {
                console.error("There was on error fetching class details!", error)
            });
        }
    }


    useEffect(() => {
        handleview(getClassId);
    }, [getClassId])


    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Sr.No.</th>
                        <th>Student Name</th>
                        <th colSpan={2} style={{textAlign:"center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {getStudentList && getStudentList?.map((rows, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <th>{rows.studentName}</th>
                            <th style={{textAlign:"center"}}><button className="btn btn-primary">Attendance details</button></th>
                            <th style={{textAlign:"center"}}><Link to ={`/student-profile/${rows.studentId}`} ><button className="btn btn-primary" >Details view</button></Link></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}