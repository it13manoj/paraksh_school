import axios from "axios";
import React, { useEffect, useState } from "react";
import { API, Images } from "../API";

export default function Header({ dataDetails }) {




    return (
        <div className="container-fluid bg-primary">
            <div className="row align-items-center px-3">
                <div className="col-lg-6 text-center text-lg-left">
                    <h4 className="text-white mb-4 mt-5 mt-lg-0">{dataDetails?.heading}</h4>
                    <h1 className="display-3 font-weight-bold text-white">{dataDetails?.heading2}</h1>
                    <p className="text-white mb-4">
                        {dataDetails?.discription}
                    </p>
                    {dataDetails?.learm_more &&  <a href="#" className="btn btn-secondary mt-1 py-3 px-5">{dataDetails?.learm_more}</a>}
                   
                </div>
                {dataDetails?.image &&
                    <div className="col-lg-6 text-center text-lg-right">
                        <img className="img-fluid mt-5" src={Images + "/" + dataDetails?.image} alt="Header" />
                    </div>
                }
            </div>
        </div>
    );
}
