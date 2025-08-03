import axios from "axios";
import react, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { API } from "../API";

export default function Resultsummary() {
    const token = Cookies.get('kids_pre_token')
    const navigate = useNavigate();
    const location = useLocation();
    const [getresultsummary, setresultsummary] = useState({
        name: "",
        total: "",
        division: "",
        data: []
    })
    const [sId, setSid] = useState()

    useEffect(() => {
        if (token == undefined || token == null || token == "") {
            navigate('/login')
        }
    }, [token])
    useEffect(() => {
        if (location.pathname.split("/").slice(-1)[0]) {
            setSid(location.pathname.split("/").slice(-1)[0]);
        }
    }, [0]);

    const ResultSummaryDetails = () => {
        let TotalMarks = 0;
        let studentName = "";
        const tempData = [];
        if (sId) {
            axios.get(`${API}student/result/${sId}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then(result => {

                result.data.data.map(rows => {
                    if (rows.studentName != getresultsummary.name) {
                        studentName = rows.studentName;
                    }
                    tempData.push({
                        subject: rows.subjectName,
                        marks: rows.marks,
                        result: rows.results,
                    });
                    TotalMarks = parseInt(parseInt(TotalMarks) + parseInt(rows.marks))
                })


                const percentage = (TotalMarks * 100) / 600;
                let division = "";
                const hasFail = tempData.some(item => item.result === "FAIL");
                if (hasFail) {
                    division = "Fail";
                } else
                    if (percentage < 30 && !tempData.includes("FAIL")) {
                        division = "Fail";
                    } else if (percentage >= 30 && percentage < 45 && !tempData.includes("FAIL")) {
                        division = "Third Division";
                    } else if (percentage >= 45 && percentage < 60 && !tempData.includes("FAIL")) {
                        division = "Second Division";
                    } else if (percentage >= 60 && !tempData.includes("FAIL")) {
                        division = "First Division";
                    }
                setresultsummary({
                    name: studentName,
                    total: TotalMarks,
                    division: division,
                    data: tempData
                });
            }


            ).catch(error => {
                console.error("There was on error fetching result details", error)
            })
        }
    }
    useEffect(() => {
        ResultSummaryDetails()
    }, [sId])

    console.log(getresultsummary);

    return (
        <>
            <table className="w-full border border-gray-300 rounded-lg shadow-md overflow-hidden" style={{ width: "100%", textAlign:"center" }}>
                <thead>
                    <tr className="bg-gray-800 text-white" style={{ backgroundColor: "rgb(63 155 146)" }}>
                        <th className="p-3 border border-gray-300">Sr</th>
                        <th className="p-3 border border-gray-300">01</th>
                        <th className="p-3 border border-gray-300">Name</th>
                        <th className="p-3 border border-gray-300">{getresultsummary.name}</th>
                    </tr>
                    <tr className="bg-gray-700 text-white" style={{ backgroundColor: "rgb(63 155 146)" }}>
                        <th className="p-2 border border-gray-300">#</th>
                        <th className="p-2 border border-gray-300">Subject</th>
                        <th className="p-2 border border-gray-300">Marks</th>
                        <th className="p-2 border border-gray-300">Result</th>
                    </tr>
                </thead>
                <tbody>
                    {getresultsummary.data.map((rows, index) => (
                        <tr key={index} className="odd:bg-gray-50">
                            <td className="p-2 border border-gray-300">{index + 1}</td>
                            <td className="p-2 border border-gray-300">{rows.subject}</td>
                            <td className="p-2 border border-gray-300">{rows.marks}</td>
                            <td className="p-2 border border-gray-300">{rows.result}</td>
                        </tr>
                    ))}
                    <tr className="bg-gray-100 font-semibold" style={{
                        backgroundColor: "rgb(53, 74, 62)",
                        color: "#ffffff",
                        fontWeight: "bold"
                    }}
                    >
                        <td className="p-2 border border-gray-300">Total</td>
                        <td className="p-2 border border-gray-300">{getresultsummary.total}</td>
                        <td className="p-2 border border-gray-300">Division</td>
                        <td className="p-2 border border-gray-300">{getresultsummary.division}</td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}