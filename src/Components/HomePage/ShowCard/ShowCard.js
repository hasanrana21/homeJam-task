import { faBlackberry } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ShowCard.css';

const ShowCard = () => {
    return (
        <div className="row container-fluid m-5 shows-card-section">
            <h2 className="shows-title"><span>Up</span>coming Shows</h2>
            <div className="col-md-3 shows-card">
                <img src="https://i.ibb.co/s57k960/andrew-Jeremiah.jpg" alt="" />
                <div className="shows-card-text ps-3">
                    <button className="btn tags">Folk</button>
                    <h5>Andrew Jeremiah</h5>
                    <a href="/">More Info <FontAwesomeIcon icon={faArrowRight}/> </a>
                    <span>  <FontAwesomeIcon icon={faBlackberry}/> </span>
                </div>
            </div>
            <div className="col-md-3 shows-card">
                <img src="https://i.ibb.co/9vQb8PT/benny.jpg" alt="" />
                <div className="shows-card-text ps-3">
                    <button className="btn tags">Folk</button>
                    <h5>Benny Dayal</h5>
                    <a href="/">More Info <FontAwesomeIcon icon={faArrowRight}/> </a>
                    <span>  <FontAwesomeIcon icon={faBlackberry}/> </span>
                </div>
            </div>
            <div className="col-md-3 shows-card">
                <img src="https://i.ibb.co/qNvznH8/vijay-Yasudas.jpg" alt="" />
                <div className="shows-card-text ps-3">
                    <button className="btn tags">Bollywood</button>
                    <h5>Vijay Yasudas</h5>
                    <a href="/">More Info <FontAwesomeIcon icon={faArrowRight}/> </a>
                    <span>  <FontAwesomeIcon icon={faBlackberry}/> </span>
                </div>
            </div>
            <div className="col-md-3 shows-card">
                <img src="https://i.ibb.co/TthLZNg/shilpa-rao.jpg" alt="" />
                <div className="shows-card-text ps-3">
                    <button className="btn tags">Folk</button>
                    <h5>Shilpa Rao</h5>
                    <a href="/">More Info <FontAwesomeIcon icon={faArrowRight}/> </a>
                    <span>  <FontAwesomeIcon icon={faBlackberry}/> </span>
                </div>
            </div>
            
        </div>
    );
};

export default ShowCard;