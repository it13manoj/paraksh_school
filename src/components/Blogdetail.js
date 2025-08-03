import axios from "axios";
import React, { useEffect, useState } from "react";
import { API, Images } from "../API";

function Blogdetail() {
    const [getBlogdetail, setBlogdetail] = useState()

    const dataDetails = {
    title: "Blog detail",

  }

    const loadBlogdetail = () => {
        axios.get(`${API}blogdetails`).then(response => {
            setBlogdetail(response.data.data)
        })
    }
    useEffect(() => {
        loadBlogdetail()
    }, [0])



    console.log(getBlogdetail)
    return (
        <>
            <div className="container py-5">
                <div className="row pt-5">
                    <div className="col-lg-8">
                        <div className="d-flex flex-column text-left mb-3">
                            <p className="section-title pr-5"><span className="pr-2">{getBlogdetail?.[0]?.heading1}</span></p>
                            <h1 className="mb-3">{getBlogdetail?.[0]?.heading2}</h1>
                            <div className="d-flex">
                                <p className="mr-3"><i className="fa fa-user text-primary"></i> Admin</p>
                                <p className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</p>
                                <p className="mr-3"><i className="fa fa-comments text-primary"></i> 15</p>
                            </div>
                        </div>
                        
                        <div className="mb-5">
                            <img className="img-fluid rounded w-100 mb-4" src={Images+"/"+getBlogdetail?.[0]?.images?.[0]?.image} alt="Image"/>
                                <p>{getBlogdetail?.[0]?.discription}</p>
                                <h2 className="mb-4">{getBlogdetail?.[1]?.heading2}</h2>
                                <img className="img-fluid rounded w-50 float-left mr-4 mb-3" src={Images+"/"+getBlogdetail?.[1].images?.[0]?.image} alt="Image"/>
                                    <p>{getBlogdetail?.[1]?.discription}</p>
                                    <h3 className="mb-4">{getBlogdetail?.[2]?.heading2}</h3>
                                    <img className="img-fluid rounded w-50 float-right ml-4 mb-3" src={Images+"/"+getBlogdetail?.[2]?.images?.[0]?.image} alt="Image"/>
                                        <p>{getBlogdetail?.[2]?.discription}</p>
                                    </div>
                                    

                                    {/* {<!-- Related Post -->} */}
                                    <div className="mb-5 mx-n3">
                                        <h2 className="mb-4 ml-3">Related Post</h2>
                                        <div className="owl-carousel post-carousel position-relative">
                                            <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mx-3">
                                                <img className="img-fluid" src="img/post-1.jpg" style={{width:'80px', height: '80px'}}/>
                                                    <div className="pl-3">
                                                        <h5 className="">Diam amet eos at no eos</h5>
                                                        <div className="d-flex">
                                                            <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                                                            <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                                                            <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mx-3">
                                                <img className="img-fluid" src="img/post-2.jpg" style={{width:'80px', height: '80px'}}/>
                                                    <div className="pl-3">
                                                        <h5 className="">Diam amet eos at no eos</h5>
                                                        <div className="d-flex">
                                                            <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                                                            <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                                                            <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mx-3">
                                                <img className="img-fluid" src="img/post-3.jpg" style={{width:'80px', height: '80px'}}/>
                                                    <div className="pl-3">
                                                        <h5 className="">Diam amet eos at no eos</h5>
                                                        <div className="d-flex">
                                                            <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                                                            <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                                                            <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Comment List --> */}
                                    <div className="mb-5">
                                        <h2 className="mb-4">3 Comments</h2>
                                        <div className="media mb-4">
                                            <img src="img/user.jpg" alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{width: '45px'}}/>
                                                <div className="media-body">
                                                    <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                                    <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                                                    <button className="btn btn-sm btn-light">Reply</button>
                                                </div>
                                        </div>
                                        <div className="media mb-4">
                                            <img src="img/user.jpg" alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{width: '45px'}}/>
                                                <div className="media-body">
                                                    <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                                    <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                                                    <button className="btn btn-sm btn-light">Reply</button>
                                                    <div className="media mt-4">
                                                        <img src="img/user.jpg" alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{width: '45px'}}/>
                                                            <div className="media-body">
                                                                <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                                                <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur, at tempor amet ipsum diam tempor at sit.</p>
                                                                <button className="btn btn-sm btn-light">Reply</button>
                                                            </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>

                                    {/* <!-- Comment Form --> */}
                                    <div className="bg-light p-5">
                                        <h2 className="mb-4">Leave a comment</h2>
                                        <form>
                                            <div className="form-group">
                                                <label for="name">Name *</label>
                                                <input type="text" className="form-control" id="name"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="email">Email *</label>
                                                <input type="email" className="form-control" id="email"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="website">Website</label>
                                                <input type="url" className="form-control" id="website"/>
                                            </div>

                                            <div className="form-group">
                                                <label for="message">Message *</label>
                                                <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                            </div>
                                            <div className="form-group mb-0">
                                                <input type="submit" value="Leave Comment" className="btn btn-primary px-3"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-5 mt-lg-0">
                                    {/* <!-- Author Bio --> */}
                                    <div className="d-flex flex-column text-center bg-primary rounded mb-5 py-5 px-4">
                                        <img src={Images+"/"+getBlogdetail?.[4]?.images?.[0]?.image} className="img-fluid rounded-circle mx-auto mb-3" style={{width: '100px'}}/>
                                            <h3 className="text-secondary mb-3">{getBlogdetail?.[4]?.heading2}</h3>
                                            <p className="text-white m-0">{getBlogdetail?.[4]?.discription}</p>
                                    </div>

                                    {/* <!-- Search Form --> */}
                                    <div className="mb-5">
                                        <form action="">
                                            <div className="input-group">
                                                <input type="text" className="form-control form-control-lg" placeholder="Keyword"/>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text bg-transparent text-primary"><i
                                                            className="fa fa-search"></i></span>
                                                    </div>
                                            </div>
                                        </form>
                                    </div>

                                    {/* <!-- Category List --> */}
                                    <div className="mb-5">
                                        <h2 className="mb-4">Categories</h2>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                <a href="">Web Design</a>
                                                <span className="badge badge-primary badge-pill">150</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                <a href="">Web Development</a>
                                                <span className="badge badge-primary badge-pill">131</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                <a href="">Online Marketing</a>
                                                <span className="badge badge-primary badge-pill">78</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                <a href="">Keyword Research</a>
                                                <span className="badge badge-primary badge-pill">56</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                <a href="">Email Marketing</a>
                                                <span className="badge badge-primary badge-pill">98</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* <!-- Single Image --> */}
                                    <div className="mb-5">
                                        <img src="img/blog-1.jpg" alt="" className="img-fluid rounded"/>
                                    </div>

                                    {/* <!-- Recent Post --> */}
                                    <div className="mb-5">
                                        <h2 className="mb-4">Recent Post</h2>
                                        <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mb-3">
                                            <img className="img-fluid" src="img/post-1.jpg" style={{width: '80px', height: '80px'}}/>
                                                <div className="pl-3">
                                                    <h5 className="">Diam amet eos at no eos</h5>
                                                    <div className="d-flex">
                                                        <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                                                        <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                                                        <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mb-3">
                                            <img className="img-fluid" src="img/post-2.jpg" style={{width: '80px', height: '80px'}}/>
                                                <div className="pl-3">
                                                    <h5 className="">Diam amet eos at no eos</h5>
                                                    <div className="d-flex">
                                                        <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                                                        <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                                                        <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mb-3">
                                            <img className="img-fluid" src="img/post-3.jpg" style={{width: '80px', height: '80px'}}/>
                                                <div className="pl-3">
                                                    <h5 className="">Diam amet eos at no eos</h5>
                                                    <div className="d-flex">
                                                        <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                                                        <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                                                        <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Image --> */}
                                    <div className="mb-5">
                                        <img src="img/blog-2.jpg" alt="" className="img-fluid rounded"/>
                                    </div>

                                    {/* <!-- Tag Cloud --> */}
                                    <div className="mb-5">
                                        <h2 className="mb-4">Tag Cloud</h2>
                                        <div className="d-flex flex-wrap m-n1">
                                            <a href="" className="btn btn-outline-primary m-1">Design</a>
                                            <a href="" className="btn btn-outline-primary m-1">Development</a>
                                            <a href="" className="btn btn-outline-primary m-1">Marketing</a>
                                            <a href="" className="btn btn-outline-primary m-1">SEO</a>
                                            <a href="" className="btn btn-outline-primary m-1">Writing</a>
                                            <a href="" className="btn btn-outline-primary m-1">Consulting</a>
                                        </div>
                                    </div>

                                    {/* <!-- Single Image --> */}
                                    <div className="mb-5">
                                        <img src="img/blog-3.jpg" alt="" className="img-fluid rounded"/>
                                    </div>

                                    {/* <!-- Plain Text --> */}
                                    <div>
                                        <h2 className="mb-4">Plain Text</h2>
                                        Aliquyam sed lorem stet diam dolor sed ut sit. Ut sanctus erat ea est aliquyam dolor et. Et no consetetur eos labore ea erat voluptua et. Et aliquyam dolore sed erat. Magna sanctus sed eos tempor rebum dolor, tempor takimata clita sit et elitr ut eirmod.
                                    </div>
                                </div>
                        </div>
                    </div>
                </>
                )
}

export default Blogdetail