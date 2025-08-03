import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { API } from "../API"; // Replace with your actual API path
import { Link, useNavigate } from "react-router-dom";
import "./attnc.css"

export default function StdAttendence() {
    const token = Cookies.get('kids_pre_token');
    const navigate = useNavigate();
    const [attendanceData, setAttendanceData] = useState([]);
    const [classList, setClassList] = useState([]);
    const [selectedDate, setSelectedDate] = useState()

    useEffect(() => {
        if (token == undefined || token == null || token == "") {
            navigate('/login')
        }
    }, [token])

    const AtteDetails = (e) => {

        const classId = e.target.value;
        axios.get(`${API}studentattendace/${classId}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(result => {
            setAttendanceData(result.data.data)
        }
        ).catch(error => {
            console.error("There was on error fetching schedule details", error)
        })
    }

    const getListOfClass = () => {
        axios.get(`${API}classes`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(result => {
            setClassList(result.data.result)
        }
        ).catch(error => {
            console.error("There was on error fetching schedule details", error)
        })
    }

    const handleStatusChange = (e, index) => {
        const updatedData = [...attendanceData];
        updatedData[index].att_status = e.target.value;
        setAttendanceData(updatedData);
    };

    const handleDescriptionChange = (e, index) => {
        const updatedData = [...attendanceData];
        updatedData[index].discription = e.target.value;
        setAttendanceData(updatedData);
    };

    const handleSubmitAttendance = () => {

        // console.log(selectedDate)
    if (!selectedDate) {
        alert("Please select a date before submitting attendance.");
        return;
    }

    const payload = attendanceData.map((item) => ({
        att_date: selectedDate,
        userid: item.id, 
        att_status: item.att_status,
        discription: item.discription,
    }));

    console.log(payload)

    axios.post(`${API}studentattenance`, payload, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then(res => {
        alert("Attendance saved successfully!");
    }).catch(err => {
        console.error("Failed to save attendance", err);
        alert("Failed to save attendance");
    });
};


    useEffect(() => {
        getListOfClass()
    }, [0])

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4" style={{ textAlign: "center" }}>Class Attendance</h2>
            <table className="w-full border border-gray-300 rounded-lg shadow-md overflow-hidden" style={{ width: "100%", textAlign: "center" }}>
                <thead>
                    <tr className="bg-gray-800 text-white" style={{ backgroundColor: "rgb(63 155 146)" }}>
                        <th className="p-3 border border-gray-300">Date</th>
                        <th className="p-3 border border-gray-300">
                            <input type="date" className="dataFromate" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

                        </th>
                        <th className="p-3 border border-gray-300">Class Name</th>
                        <th className="p-3 border border-gray-300">
                            <select className="dataFromate" onChange={AtteDetails}>
                                {classList && classList.map(row => (
                                    <option value={row.id}>{row.classes}</option>
                                ))}

                            </select>

                            {/* {attendanceData?.[0]?.classes} */}</th>
                    </tr>
                    <tr className="bg-gray-700 text-white" style={{ backgroundColor: "rgb(63 155 146)" }}>
                        <th className="p-2 border border-gray-300">Sr.No.</th>
                        <th className="p-2 border border-gray-300">Student Name</th>
                        <th className="p-2 border border-gray-300">Attendence Status</th>
                        <th className="p-2 border border-gray-300">Discription</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceData && attendanceData?.map((rows, index) => (
                        <tr className="odd:bg-gray-50">
                            <td className="p-2 border border-gray-300" key={index}>{index + 1}</td>
                            <td className="p-2 border border-gray-300">{rows.name}</td>
                            <td className="p-2 border border-gray-300">
                                <select value={rows.att_status} onChange={(e) => handleStatusChange(e, index)} >
                                    <option value="1">Present</option>
                                    <option value="2">Absent</option>
                                    <option value="3">On Leave</option>
                                </select>
                            </td>
                            <td className="p-2 border border-gray-300">
                                <input type="text" value={rows.discription} onChange={(e) => handleDescriptionChange(e, index)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
                <div className="text-center mt-4">
                    <button type="button" className="btn btn-primary me-2" onClick={handleSubmitAttendance} >Save Attendance</button>
                    <Link to={`/student-attendence/`}><button type="button" className="btn btn-primary me-2">Attendance Report</button></Link>
                </div>
            </table>
        </div>
    );
}
