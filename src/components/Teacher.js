import axios from "axios";
import React, { useEffect, useState } from "react";
import { API, Images } from "../API";
import Comment from "./Comment";

function Teacher(){
    const[getTeacher, setTeacher]=useState()

    const loadTeacher = () =>{
        axios.get(`${API}teacher`).then(response=>{
            console.log(response.data.data)
            setTeacher(response.data.data)
        })
    }
    useEffect(()=>{
        loadTeacher()
    },[0])

   
    return (
        <>
        <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5"><span className="px-2">{getTeacher?.[0].heading1}</span></p>
          <h1 className="mb-4">{getTeacher?.[0].heading2}</h1>
        </div>
        <div className="row">
          {getTeacher?.map((rows, i) => (
            <div className="col-md-6 col-lg-3 text-center team mb-5" key={i}>
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src={Images+"/"+rows?.images?.[0]?.image} alt="" />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-outline-light text-center px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <h4>{rows?.images?.[0].image}</h4>
              <i>{rows?.teacher_name}</i>
              <br />
              <i>{rows?.designation}</i>
            </div>
          ))}
        </div>

      </div>
    </div>
    <Comment />

        </>
    )
}

export default Teacher;
