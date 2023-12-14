import React from 'react';
import Button from 'react-bootstrap/Button';
import image6 from '../Assets/Group 10.png'; // Make sure to use the correct path to your image
import { Link } from 'react-router-dom';

export default function Statistics() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col col-lg-6 col-md-4 col-sm-12 align-item-center justify-content-center">
            <h2><b>The Fast Pinpoint</b></h2>
            <h2 style={{ color: 'red' }}>Get Started -</h2>
            <h2><b>Tracking & Reservation.</b></h2>
          </div>

          <div className="col col-lg-6 col-md-8 col-sm-12">
            {/* Make sure to include the correct JSX syntax for the image */}
            <Link to='/Abt'>
              <img src={image6} alt="Description of the image" />
            </Link>
          </div>
          <br></br>
          <br></br>
        </div>
        <div className="row mt-7">
          <br></br>
          <br></br>
          <div className="d-flex justify-content-center">
            <p>Pinpoint is the fastest tracking and reservation software<br></br> solution for personal and enterprise vehicles for institutes,<br></br> offices and companies with live tracking, history recording,<br></br> estimated arrival time and usage report generation and much <br></br>more features</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="bttn">
          <div className="row">
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <Button variant="secondary">5000 Users</Button>
            </div>

            <div className="col col-lg-4 col-md-4 col-sm-12">
              <Button variant="secondary">10 Trusted Clients</Button>
            </div>

            <div className="col col-lg-4 col-md-4 col-sm-12">
              <Button variant="secondary">10k+ Downloads</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
