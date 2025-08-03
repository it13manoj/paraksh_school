import axios from "axios";
import react, { useEffect, useState } from "react";
import { API } from "../API";
import { message } from 'antd';
import 'antd/dist/reset.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Sign_in() {
    const navigate = useNavigate();
    const [login, setLogin] = useState(
        {
            email: "",
            password: ""
        }
    )

    const eventHandler = (e) => {
        setLogin(preState => ({ ...preState, [e.target.name]: e.target.value }))
    }


    const loginHander = async (e) => {
        e.preventDefault();
        try {
           await axios.post(`${API}users/login`, login).then((result) => {
                console.log(result);
                if (result) {
                    if (result?.status == 200) {
                        Cookies.set('kids_pre_token',(result?.data.token), { expires: 7 });
                        navigate('/dashboard');
                    }
                    else {
                        message.error('Something Went Wrong!');
                    }
                }
            }
            )
        } catch {
                return false
        }
    }

    return (
        <>
            <div className="container">
                <form className="" id="" method="post" onSubmit={loginHander}>
                    <div className="row">
                        <div className="form-group">
                            <div className="co-md-4 col-md-offset-4">
                                <label>User Email</label>
                                <input type="text" name="email" value={login?.email} placeholder="Enter the Email" className="form-controller" onChange={eventHandler} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="co-md-4 col-md-offset-4">
                                <label>User Password</label>
                                <input type="password" name="password" value={login?.password} placeholder="Enter the Password" className="form-controller" onChange={eventHandler} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="co-md-4 col-md-offset-4">
                                <button type="submit" >Login</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}