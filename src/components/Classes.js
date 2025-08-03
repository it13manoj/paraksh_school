import React, { useEffect, useState } from "react";
import { API, Images } from "../API";
import axios from "axios";
import Header from "./Header";

 function Classes() {
  const [getClasses, setClasses] = useState(null);
  const [getkids, setkids] = useState();

    const dataDetails = {
    title: "Class",

  }

  const loadClasses = () => {
    axios.get(`${API}class`)
      .then(response => {
        console.log(response.data.data)
        setClasses(response.data.data[0]);
      })
      .catch(err => console.error(err));
  };

  const loadkidsclasses = () => {
    axios.get(`${API}kidsclasses`)
      .then(response => {
        console.log(response.data.data)
        setkids(response.data.data);
     
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    loadClasses();
    loadkidsclasses();
  }, [0]);

  // console.log(getkids);
  getkids?.map(rows=>{
    console.log(rows.images[0].image)
  })

  return (
    <>
    {/* <Header dataDetails ={dataDetails} /> */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5"><span className="px-2">{getClasses?.heading1}</span></p>
            <h1 className="mb-4">{getClasses?.heading2}</h1>
          </div>
          <div className="row">


            { getkids?.map(rows=>(
               <div className="col-lg-4 mb-5">
                <div className="card border-0 bg-light shadow-sm pb-2">
                  <p>{rows?.images?.[0].image}</p>
                  <img
                    className="card-img-top mb-2"
                    src={ `${Images+"/"+rows?.images?.[0].image}`}
                    alt="Kids Class"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">{getkids?.heading}</h4>
                    <p className="card-text">
                      {getkids?.data?.discription}
                    </p>
                  </div>
                  <div className="card-footer bg-transparent py-4 px-5">
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right"><strong>Age of Kids</strong></div>
                      <div className="col-6 py-1">{rows?.age_of_kids}</div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right"><strong>Total Seats</strong></div>
                      <div className="col-6 py-1">{rows?.total_seat}</div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right"><strong>Class Time</strong></div>
                      <div className="col-6 py-1">{rows?.class_time}</div>
                    </div>
                    <div className="row">
                      <div className="col-6 py-1 text-right border-right"><strong>Tuition Fee</strong></div>
                      <div className="col-6 py-1">{rows?.tution_fee}</div>
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
                </div>
              </div>
            ))}
           
          </div>
        </div>
      </div>
    </>
  );
}


export default Classes;