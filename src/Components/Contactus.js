
import React, { useState } from 'react';
 
import { FormControl } from 'react-bootstrap';

import image from '../Assets/image 4.png'

function About(){
  const [UserInfo, setUserInfo] = useState({
    Contact: '',
    email: '',
    message: ''
  })
    
function submitinfo(){
  console.log(UserInfo);
} 
  return (
     <>
    <div className="about-us">
      <div className="container"> 
        <h1>About Pinpoint</h1>
        <img src={image} alt='group'/>
        <p>
        Pinpoint is the fastest tracking and reservation software solution for personal and enterprise vehicles for institutes, offices and companies with live tracking, history recording, estimated arrival time and usage report generation and much more features.

We ensure the best usage for vehicles tracking and reservation system security with advance encryption standards and capability of keeping your assets like car, points much more secure with the live tracking system
        </p>
      </div>
  
  
    <div className="contact-us">
      <div className="container">
        <h1>Feedback Form</h1> 
        <div className="row ">
          <div className="col-sm-12 col-lg-6">
            <form> 
            <FormControl value={UserInfo.email} onChange={(e) => setUserInfo({ ...UserInfo, email: e.target.value })} type="email" id="email" name="email" placeholder="Enter Email " className='txtfield' />
               
            </form>
          </div>
          <div className="col-sm-12 col-lg-6">
            <form> 
            <FormControl value={UserInfo.Contact} onChange={(e) => setUserInfo({ ...UserInfo, Contact: e.target.value })} type="text" id="Contact" name="Contact" placeholder="Enter Contact" className='txtfield' />

            </form>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <form> 
              <textarea value={UserInfo.message} onChange={(e) => setUserInfo({ ...UserInfo, message: e.target.value })} id="message" name="message" placeholder="Your Message" className='txtfield'></textarea>
            </form>
          </div>
        </div>

        {/* Center the button in a separate container */}
        <div className="btn-center">
          <button onClick={submitinfo} type="submit" className="btn btn-secondary">Send Message</button>
        </div>
      </div>
    </div>
   
    </div>
    
</>
  );
}

export default About;