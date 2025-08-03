import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../API";



function TeacherClass() {
    const token = Cookies.get('kids_pre_token');
    const navigate = useNavigate();
    const [getStudentClass, setStudentClass] = useState()

    const [getAssignClass, setAssignClass] = useState();


    useEffect(() => {
        if (token == undefined || token == null || token == "") {
            navigate('/login')
        }
    }, [token])

    const assignClass = () => {
        axios.get(`${API}teacher/assign_class`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(result => {
            setAssignClass(result.data.data)
            console.log(result.data)
        }
        ).catch(error => {
            console.error("There was on error fetching class details!", error)
        });
    }
    useEffect(() => {
        assignClass()
    }, [0])

    const handleview = (rows) => {
        axios.get(`${API}teacher/assign_class/${rows}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(result => {
            setStudentClass(result.data.data)
            console.log(result.data)
        }
        ).catch(error => {
            console.error("There was on error fetching class details!", error)
        });
    }

    const backToClass = () => {
        setStudentClass(null)
    }



    return (
        <>
            <table className="table">
                <>
                    {getStudentClass && getStudentClass?.length > 0 && (<>
                        <thead className="thead-dark">
                            <tr>
                                <th>Sr.No.</th>
                                <th>Student Name</th>
                                <th>Subject</th>
                                <th>Time</th>
                                <th colSpan={3} style={{ textAlign: "center" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getStudentClass && getStudentClass?.map((rows, key) => (
                                <tr key={key}>
                                    <td scope="row">{key}</td>
                                    <td>{rows.StudentName}</td>
                                    <td>{rows.subject_name}</td>
                                    <td>{rows.time}</td>
                                    <td style={{width:"40px"}}><Link to ={`/student-profile/${rows.StudentId}`} ><button className="btn btn-primary" >Profile</button></Link></td>
                                    <td style={{width:"40px"}}><Link to ={`/studentresult/${rows.StudentId}`} ><button className="btn btn-primary" >Result</button></Link></td>
                                    <td style={{width:"40px"}}><button className="btn btn-primary"  onClick={backToClass}>Back</button></td>
                                </tr>
                            ))}
                    </tbody>
                </>
                    )}
                {!getStudentClass && getAssignClass && getAssignClass?.length > 0 && (
                    <>
                        <thead className="thead-dark">
                            <tr>
                                <th>Sr.No.</th>
                                <th>Classes</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getAssignClass && getAssignClass?.map((rows, key) => (
                                <tr key={key}>
                                    <td scope="row">{key}</td>
                                    <td>{rows.class_name}</td>
                                    <th><button className="btn btn-primary" onClick={() => handleview(rows.classId)} >View</button></th>
                                </tr>
                            ))}
                        </tbody>
                    </>)}

            </>
        </table >
        </>
    )
}

export default TeacherClass