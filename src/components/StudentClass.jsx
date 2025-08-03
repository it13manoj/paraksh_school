import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { API, Images } from "../API";
import "./reg.css"

export default function StudentClass() {
    const token = Cookies.get('kids_pre_token');
    const navigate = useNavigate();
    const [teacher, setTeacher] = useState();
    const [classes, setclasses] = useState();
    const [subject, setsubject] = useState();
    const [time, settime] = useState();
    const [studentClass, setStudentClass] = useState({
        teacherid: "",
        classesid: "",
        subjectid: "",
        timeid: ""
    });
    const [studentDetails, setStudentDetails] = useState();
    useEffect(() => {
        if (token == undefined || token == null || token == "") {
            navigate('/login');
        }
    }, [token])


    const modelShow = () => {
        const modal = document.querySelector('.modal');
        Object.assign(modal.style, {
            display: "block"
        })

    }
    const closeModal = () => {
        const modal = document.querySelector('.modal');
        Object.assign(modal.style, {
            display: "none"
        })
    }


    const getTeacher = () => {

        axios.get(`${API}users/teacher`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(result => {
            setTeacher(result.data.results);
        })
    }
    useEffect(() => {
        getTeacher()
    }, [0])


    const getclasses = () => {

        axios.get(`${API}classes`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(result => {
            setclasses(result.data.result);
        })
    }
    useEffect(() => {
        getclasses()
    }, [0])


    const getsubject = () => {
        axios.get(`${API}subject`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(result => {
            setsubject(result.data.data)
        })
    }
    useEffect(() => {
        getsubject()
    }, [0])


    const gettime = () => {
        axios.get(`${API}time`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(result => {
            settime(result.data.data)
        })
    }


    const submitHandler = (e) => {
        e.preventDefault();

        axios.post(`${API}studentclass`, studentClass, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                alert("Class details added successfully");
                closeModal();
                // Optionally, refresh the class list or perform other actions
            } else {
                alert("Failed to add class details");
            }
        }).catch(error => {
            console.error("There was an error adding the class details!", error);
        });
    }

    const eventhandler = (e) => {
        setStudentClass(preState => ({ ...preState, [e.target.name]: e.target.value }))
    }



    const dataDetails = () => {

        axios.get(`${API}studentclass`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(result => {
            setStudentDetails(result.data.data);
            console.log(result.data);
        }
        ).catch(error => {
            console.error("There was an error fetching class details!", error);
        });

    }

    useEffect(() => {
        gettime()
        dataDetails();
    }, [0])

    return (
        <>
            {/* <span className="btn btn-danger" onClick={modelShow} style={{ float: "right", margin: "10px" }}>Add</span> */}
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Sr.No.</th>
                        <th scope="col">Teacher Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Time</th>
                    </tr>

                </thead>
                <tbody>
                    {studentDetails && studentDetails?.map((rows, key) => (
                        <tr key={key}>
                            <th scope="row">{key}</th>
                            <td>{rows.Teacher}</td>
                            <td>{rows.class_name}</td>
                            <td>{rows.subject_name}</td>
                             <td>{rows.time}</td>
                        </tr>
                    ))}

                </tbody>
            </table>


            <div className="modal" tabindex="-1" role="dialog" style={{ top: "8rem" }}>
                <div className="modal-container" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Class Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={submitHandler}>
                            <div className="modal-body">

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="from-group">
                                            <select name="teacherid" class="form-select form-select-lg mb-3 container" aria-label=".form-select-lg example" onChange={eventhandler}>
                                                <option selected>Teacher Name</option>
                                                {teacher && teacher?.map(row => (
                                                    <option value={row.id}>{row.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="from-group">
                                            <select name="classesid" class="form-select form-select-lg mb-3 container" aria-label=".form-select-lg example" onChange={eventhandler}>
                                                <option selected>Class Name</option>
                                                {classes && classes?.map(row => (
                                                    <option value={row.id}>{row.classes}</option>
                                                ))}

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="from-group">
                                            <select name="subjectid" class="form-select form-select-lg mb-3 container" aria-label=".form-select-lg example" onChange={eventhandler}>
                                                <option selected>Subject Name</option>
                                                {subject && subject?.map(row => (
                                                    <option value={row.id}>{row.sub_name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="from-group">
                                            <select name="timeid" class="form-select form-select-lg mb-3 container" aria-label=".form-select-lg example" onChange={eventhandler}>
                                                <option selected>Select Time</option>
                                                {time && time?.map(row => (
                                                    <option value={row.id}>{row.time}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Save changes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
