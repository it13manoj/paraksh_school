import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {
    const token = Cookies.get('kids_pre_token');
    const navigate = useNavigate();
    useEffect(() => {
        if (token == undefined || token == null || token == "") {
            navigate('/login');
        }
    }, [token])
    const logOutHandler = () => {
        Cookies.remove('kids_pre_token');
         navigate('/login');
    }

    return (
        <div className="container-fluid bg-light position-relative shadow">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                <Link
                    to="#"
                    className="navbar-brand font-weight-bold text-secondary"
                    style={{ fontSize: "50px" }}
                >
                    <i className="flaticon-043-teddy-bear"></i>
                    <span className="text-primary">Paraksh</span>
                </Link>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav font-weight-bold mx-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/class" className="nav-item nav-link">Classes</Link>
                        <Link to="/teacher" className="nav-item nav-link">Teachers</Link>
                        <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="/blog" className="dropdown-item">Blog</Link>
                                <Link to="/blogdetail" className="dropdown-item">Blog_Detail</Link>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    {token ?
                        <>
                            <Link to="/dashboard" className="btn btn-primary px-4" >Dashboard</Link>&nbsp;&nbsp;&nbsp;
                            <Link className="btn btn-primary px-4" onClick={logOutHandler} style={{backgroundColor:"red", border:"1px solid red"}}>LogOut</Link>
                        </>
                        : <Link to="/registation" className="btn btn-primary px-4">Registation</Link>}

                </div>
            </nav>
        </div>
    );
}
