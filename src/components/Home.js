import React, { useEffect, useState } from "react";
import { API, Images } from "../API";
import axios from "axios";
import About from "./About";
import Classes from "./Classes";
import Teacher from "./Teacher";
import Blog from "./Blog";
import Header from "./Header";


export default function Home() {
  const [getHome, setHome] = useState();
  const [getAbout, setAbout] = useState();



  const loadHome = () => {
    axios.get(`${API}facilities`).then(response => {
      setHome(response.data.data)

    })
  }

  const loadAbout = async () => {
    axios.get(`${API}about`).then(async response => {
      let data = response.data.data[0]
      let sortHeading = await aboutDesc(response.data.data[0].heading3)
      await setAbout(preState => ({ ...preState, data, sortHeading: sortHeading }));
    })
  }

  const aboutDesc = async (sortDesc) => {
    return await sortDesc.split("#")
  }

  useEffect(() => {
    loadHome()
    loadAbout()
  }, [0])




  console.log(getAbout)

  return <div>
   
    <div className="container-fluid pt-5">
      <div className="container pb-3">
        <div className="row">
          {getHome?.map((rows) => (

            <div className="col-lg-4 col-md-6 pb-1" >
              <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: "30px" }}>
                <i className={`${rows.image} h1 font-weight-normal text-primary mb-3`}></i>
                <div className="pl-4">
                  <h4>{rows.heading}</h4>
                  <p className="m-0">
                    {rows.discription}
                  </p>
                </div>
              </div>
            </div>

          ))}


          {/* {[
            { icon: "flaticon-050-fence", title: "Play Ground" },
            { icon: "flaticon-022-drum", title: "Music and Dance" },
            { icon: "flaticon-030-crayons", title: "Arts and Crafts" },
            { icon: "flaticon-017-toy-car", title: "Safe Transportation" },
            { icon: "flaticon-025-sandwich", title: "Healthy food" },
            { icon: "flaticon-047-backpack", title: "Educational Tour" }
          ].map((feature, i) => (
            <div className="col-lg-4 col-md-6 pb-1" key={i}>
              <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: "30px" }}>
                <i className={`${feature.icon} h1 font-weight-normal text-primary mb-3`}></i>
                <div className="pl-4">
                  <h4>{feature.title}</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>

    {/* About Section */}

    <About />

    {/* Classes Section */}
    <Classes />

    {/* Book A Seat Section */}
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <p className="section-title pr-5"><span className="pr-2">Book A Seat</span></p>
            <h1 className="mb-4">Book A Seat For Your Kid</h1>
            <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea...</p>
            <ul className="list-inline m-0">
              <li className="py-2"><i className="fa fa-check text-success mr-3"></i>Labore eos amet dolor amet diam</li>
              <li className="py-2"><i className="fa fa-check text-success mr-3"></i>Etsea et sit dolor amet ipsum</li>
              <li className="py-2"><i className="fa fa-check text-success mr-3"></i>Diam dolor diam elitripsum vero.</li>
            </ul>
            <a href="#" className="btn btn-primary mt-4 py-2 px-4">Book Now</a>
          </div>
          <div className="col-lg-5">
            <div className="card border-0">
              <div className="card-header bg-secondary text-center p-4">
                <h1 className="text-white m-0">Book A Seat</h1>
              </div>
              <div className="card-body rounded-bottom bg-primary p-5">
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control border-0 p-4" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <select className="custom-select border-0 px-4" style={{ height: '47px' }}>
                      <option defaultValue>Select A Class</option>
                      <option value="1">Class 1</option>
                      <option value="2">Class 2</option>
                      <option value="3">Class 3</option>
                    </select>
                  </div>
                  <button className="btn btn-secondary btn-block border-0 py-3" type="submit">Book Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Teachers Section */}

    <Teacher />

    {/* Testimonial Section */}
    <div className="container-fluid py-5">
      <div className="container p-0">
        <div className="text-center pb-2">
          <p className="section-title px-5"><span className="px-2">Testimonial</span></p>
          <h1 className="mb-4">What Parents Say!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          {[1, 2, 3, 4].map((i) => (
            <div className="testimonial-item px-3" key={i}>
              <div className="bg-light shadow-sm rounded mb-4 p-4">
                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
              </div>
              <div className="d-flex align-items-center">
                <img className="rounded-circle" src={`img/testimonial-${i}.jpg`} style={{ width: '70px', height: '70px' }} alt="Parent" />
                <div className="pl-3">
                  <h5>Parent Name</h5>
                  <i>Profession</i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Blog Section */}
    <Blog />
  </div>;
}



