import axios from "axios";
import react, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { API } from "../API";

export default function Schedule() {
    const token = Cookies.get('kids_pre_token');
    const navigate = useNavigate();
    const [getScheduleDetails, setScheduleDetails] = useState();

    useEffect(() => {
        if (token == undefined || token == null || token == "") {
            navigate('/login')
        }
    }, [token])

    const dataDetails = () => {
        axios.get(`${API}schedule`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(result => {
            setScheduleDetails(result.data.data)
        }
        ).catch(error => {
            console.error("there was on error fetching schedule details !", error)
        });
    }
    useEffect(() => {
        dataDetails()
    }, [token])

    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Sr.No.</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">notification</th>
                    </tr>
                </thead>
                <tbody>
                    {getScheduleDetails && getScheduleDetails?.map((rows, key) => (
                        <tr key={key}>
                            <th scope="row">{key}</th>
                            <td>{rows.name}</td>
                            <td>{rows.classes}</td>
                            <td>{rows.notification}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}