import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../API";
import './reg.css'

import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Registation() {
    const [getRegistion, setRegistion] = useState(
        {
            name: "",
            degination: "",
            discription: "",
            type: "",
            gender: "",
            dob: "",
            address: "",
            contact: "",
            email: "",
            password: "",
            social_link: "",
            image: ""
        }
    )
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [Successmessage, setSuccessmessage] = useState("");
    const handleFileChange = (e) => {
        setSelectedFiles(e.target.files);
    };

    const dataDetails = {
        title: "Registation",

    }

    const eventHandler = (e) => {
        setRegistion(preState => ({ ...preState, [e.target.name]: e.target.value }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const fromData = new FormData();
        fromData.append("name", getRegistion.name)
        fromData.append("degination", getRegistion.degination)
        fromData.append("discription", getRegistion.discription)
        fromData.append("type", getRegistion.type)
        fromData.append("gender", getRegistion.gender)
        fromData.append("dob", getRegistion.dob)
        fromData.append("address", getRegistion.address)
        fromData.append("contact", getRegistion.contact)
        fromData.append("email", getRegistion.email)
        fromData.append("password", getRegistion.password)
        fromData.append("social_link", getRegistion.social_link)
        for (let i = 0; i < selectedFiles.length; i++) {
            fromData.append('images', selectedFiles[i]);
        }
        axios.post(`${API}users`, fromData).then(response => {
            console.log(response)
            toast.success("Registered Successfully!")
            setSuccessmessage("Registered Successfully!")
            setTimeout(() => setSuccessmessage(""), 10000);
        }).catch(error => {
            toast.error("Registered Failed!")
            console.error("Registered Failed!", error);
        });
    }

    const cancelHandler = () => {
        setRegistion({
            name: "",
            degination: "",
            discription: "",
            type: "",
            gender: "",
            dob: "",
            address: "",
            contact: "",
            email: "",
            password: "",
            social_link: "",
            image: ""
        })
        setSelectedFiles([])
        setSuccessmessage("")
        toast.success("Data clear!")
    }



    return (
        <>

            <form action="users" method="POST" enctype="multipart/form-data" className="myStyle" onSubmit={submitHandler} >
                <label><b> User's Name:-</b></label>
                <input type="text" id="name" name="name" placeholder="Name" value={getRegistion.name} size={50} required onChange={eventHandler} /><br /><br />
                <label><b> User's Degination:-</b></label>
                <input type="text" id="degination" name="degination" value={getRegistion.degination} placeholder="Degination" required onChange={eventHandler} /><br /><br />
                <label><b> User's Description:-</b></label>
                <input type="text" id="discription" name="discription" placeholder="Description" size={100} required onChange={eventHandler} /><br /><br />

                <label for="type"><b>User's Type:-</b></label>
                <select name="type" required onChange={eventHandler}>
                    <option value="">Select Type</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                    <option value="Director">Director</option>
                    <option value="Principle">Principle</option>
                    <option value="HOD">HOD</option>
                    <option value="Pion">Pion</option>
                    <option value="Gard">Gard</option>
                    <option value="Driver">Driver</option>
                    <option value="Parent">Parent</option>
                </select>

                <label for="gender"><b>User's Gender: -</b></label>
                <select name="gender" required onChange={eventHandler}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <label for="dob"><b>User's Date of Birth: -</b></label>
                <input type="date" name="dob" required onChange={eventHandler} /><br /><br />
                <label><b> User's Address:-</b></label>
                <input type="text" id="address" name="address" placeholder="Address" size={100} required onChange={eventHandler} /><br /><br />
                <label><b> User's Contact:-</b></label>
                <input type="text" id="contact" name="contact" placeholder="Contact" size={25} required onChange={eventHandler} /><br /><br />
                <label><b> User's Email-id:-</b></label>
                <input type="email" id="email" name="email" placeholder="Email" size={50} required onChange={eventHandler} /><br /><br />
                <label><b> User's Password:-</b></label>
                <input type="password" id="password" name="password" placeholder="Password" size={30} required onChange={eventHandler} /><br /><br />
                <label><b> User's Social Link :-</b></label>
                <input type="text" id="social_link" name="social_link" placeholder="Social Link" size={100} /><br /><br />

                <label for="image"><strong>Upload Image: -</strong></label>
                <input type="file" name="images" accept="image/*" multiple required onChange={handleFileChange} /><br /><br />

                <button type="submit" style={{ marginRight: '10px' }}>Register</button>
                <button type="button" onClick={cancelHandler}>Cancel</button><br /><br />
                <span >Already Signup User <Link to="/login"> Click Here </Link> </span>
                {Successmessage && (<p style={{ color: "green", fontWeight: "bold" }}>{Successmessage}</p>)}
            </form>
            <ToastContainer />
        </>
    )
}
