import axios from "axios";
import react, { useEffect, useState } from "react";
import { API, Images } from "../API";

function Blog() {
    const [getBlog, setBlog] = useState()

    const dataDetails = {
    title: "Blog",

  }

    const loadBlog = () => {
        axios.get(`${API}blog`).then(response => {
            setBlog(response.data.data)
        })
    }

    useEffect(() => {
        loadBlog()
    }, [0])

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5"><span className="px-2">{getBlog?.[0]?.heading1}</span></p>
                        <h1 className="mb-4">{getBlog?.[0]?.heading2}</h1>
                    </div>
                    <div className="row pb-3">
                        {getBlog?.map((rows, i) => (
                            <div className="col-lg-4 mb-4" key={i}>
                                <div className="card border-0 shadow-sm mb-2">
                                    <img className="card-img-top mb-2" src={Images+"/"+rows?.images?.[0]?.image} alt="Blog" />
                                    <div className="card-body bg-light text-center p-4">
                                        <h4>{getBlog?.heading3}</h4>
                                        <div className="d-flex justify-content-center mb-3">
                                            <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                                            <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                                            <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                                        </div>
                                        <p>{getBlog?.[0]?.discription}</p>
                                        <a href="#" className="btn btn-primary px-4 mx-auto my-2">Read More</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog