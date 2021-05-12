import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        <div className="row container-fluid p-5 ms-5 reviews-card-section">
            <div className="title d-flex justify-content-between pe-5">
                <h2 className=""><span>Re</span>views</h2>
                <p>1/12  <FontAwesomeIcon icon={faArrowLeft}/> <FontAwesomeIcon icon={faArrowRight}/> </p>
            </div>
            <div className="col-md-4 reviews-card">
                <div className="review-content d-flex mb-3">
                    <img src="https://i.ibb.co/ZGT69LT/Ellipse-91.png" alt="" />
                    <div className="ms-4">
                        <h6>Hellen Jummy</h6>
                        <p> <small> <FontAwesomeIcon icon={faFlag}/>  PALO ALTO,CA </small></p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad reiciendis eveniet dolores at nostrum dolorum distinctio, odit dignissimos fuga est ipsum corrupti itaque sapiente!</p>
            </div>
            <div className="col-md-4 reviews-card">
                <div className="review-content d-flex mb-3">
                    <img src="https://i.ibb.co/QmxTc8j/review3.jpg" alt="" />
                    <div className="ms-4">
                        <h6>Selena Imli</h6>
                        <p> <small> <FontAwesomeIcon icon={faFlag}/>  PALO ALTO,CA </small></p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad reiciendis eveniet dolores at nostrum dolorum distinctio, odit dignissimos fuga est ipsum corrupti itaque sapiente!</p>
            </div>
            <div className="col-md-4 reviews-card">
                <div className="review-content d-flex mb-3">
                    <img src="https://i.ibb.co/BG1rZfN/Ellipse-92.png" alt="" />
                    <div className="ms-4">
                        <h6>John Smith</h6>
                        <p> <small> <FontAwesomeIcon icon={faFlag}/>  PALO ALTO,CA </small></p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad reiciendis eveniet dolores at nostrum dolorum distinctio, odit dignissimos fuga est ipsum corrupti itaque sapiente!</p>
            </div>

        </div>
    );
};

export default Reviews;