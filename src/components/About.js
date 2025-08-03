import axios from "axios";
import React, { useEffect, useState } from "react";
import { API, Images } from "../API";


export default function About() {
  const [getAbout, setAbout] = useState();
  const dataDetails = {
    heading: "About",


  }

  const loadAbout = async () => {
    axios.get(`${API}about`).then(async response => {
      let data = response.data.data[1]
      let sortHeading = await aboutDesc(response.data.data[0].heading3)
      await setAbout(prestate => ({ ...prestate, data, sortHeading: sortHeading }));
    })
  }

  const aboutDesc = async (sortDesc) => {
    return await sortDesc.split('#')
  }


  useEffect(() => {
    loadAbout()
  }, [0])

  // console.log(getAbout)

  return (
    <>
    {/* <Header dataDetails={dataDetails} /> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid rounded mb-5 mb-lg-0" src={Images + "/" + getAbout?.data?.images?.[0]?.image} alt="About" />
            </div>
            <div className="col-lg-7">
              <p className="section-title pr-5"><span className="pr-2">{getAbout?.data?.heading1}</span></p>
              <h1 className="mb-4">{getAbout?.data?.heading2}</h1>
              <p>
                {getAbout?.data?.discription}
              </p>
              <div className="row pt-2 pb-4">
                <div className="col-6 col-md-4">
                  <img className="img-fluid rounded" src={Images + "/" + getAbout?.data?.images?.[1]?.image} alt="About 2" />
                </div>
                <div className="col-6 col-md-8">
                  <ul className="list-inline m-0">
                    {getAbout?.sortHeading?.map(rows => (
                      <li className="py-2 border-top border-bottom">
                        <i className="fa fa-check text-primary mr-3"></i>{rows}
                      </li>
                    ))}

                  </ul>
                </div>
              </div>
              <a href="#" className="btn btn-primary mt-2 py-2 px-4">{getAbout?.data?.learn_more}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}