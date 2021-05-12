import { faCalendarAlt, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container-fluid row justify-content-end banner-section px-5">
            <div className="row align-items-center px-5">
                <div className="col-md-6 banner-text">
                    <h1>Cari Cari</h1>
                    <p>Live from their sofa to yours.Get closer to your favorite artist, and never miss out.</p>
                </div>
                <div className="col-md-6"></div>
            </div>

            <div className="row py-5 ps-5 circle-area">
                
                <div className="col-md-3 label-circle">
                    <div className="label-circle-text">
                        <p> <span><FontAwesomeIcon icon={faHeart}/></span> </p>
                        <p>0</p>
                        <h6>Label</h6>
                    </div>
                </div>
                <div className="col-md-3 label-circle">
                    <div className="label-circle-text">
                        <p> <span><FontAwesomeIcon icon={faCalendarAlt}/></span> </p>
                        <p>0</p>
                        <h6>Label</h6>
                    </div>
                </div>
                <div className="col-md-3 label-circle">
                    <div className="label-circle-text">
                        <p> <span><FontAwesomeIcon icon={faCalendarAlt}/></span> </p>
                        <p>0</p>
                        <h6>Label</h6>
                    </div>
                </div>
                <div className="col-md-3 label-circle">
                    <div className="label-circle-text">
                        <p> <span><FontAwesomeIcon icon={faCalendarAlt}/></span> </p>
                        <p>0</p>
                        <h6>Label</h6>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;