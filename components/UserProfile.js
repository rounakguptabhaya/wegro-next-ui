"use client"

import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import Input from './Input';
import ToggleButton from './ToggleButton';


const UserProfile = (props) => {

    const [checked, setChecked] = useState();


  const handleClick = () => {
    props.handleClick();
  }  

  const handleToggle = (key) => {
    props.handleToggle(key);
    // console.log(key + " pressed");
  }

  return (
    <div className='profile-container'>
        <section className="counter-one">
		<div class="auto-container">
			<div className="inner-container">
                <div className='profile-wrapper'>
                    <div className='profile-header'>
                        <h4>Personal Details</h4>
                        <button type="submit" class="template-btn btn-style-one" onClick={handleClick}>
                                    <span class="btn-wrap">
                                        <span class="text-one"><CiEdit className='edit-logo'/>Edit</span>
                                        <span class="text-two"><CiEdit className='edit-logo'/>Edit</span>
                                    </span>
                        </button>
                    </div>
    
                    <div className='profile-body'>
                        <div className="newsletter-box">
                            <label>Your name</label>    
                            <div className="form-group">
                                
                                <input readOnly type="text" name="name" value={props.name} placeholder="NA" required />
                                                                
                            </div>
                            <label>Your email</label>
                            <div className="form-group">
                                <input readOnly type="email" name="email" value={props.email} placeholder="NA" required />
                                {/* <button name='email' type="submit" class="template-btn btn-style-one" onClick={() => handleClick("email")}>
								<span class="btn-wrap">
									<span class="text-one"><CiEdit className='edit-logo'/>Edit</span>
									<span class="text-two"><CiEdit className='edit-logo'/>Edit</span>
								</span>
							    </button> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='profile-wrapper'>
                    <div className='profile-header'>
                        <h4>Mobile Number</h4>
                    </div>
                    
                    <div className='profile-body'>
                        <div className="newsletter-box">
                            <label>Mobile Number</label>
                            <div className="form-group">
                                <input readOnly type="text" name="mobileNumber" value={props.mobileNumber} placeholder="NA" required />
                                {/* <button name='mobileNumber' type="submit" class="template-btn btn-style-one" onClick={() => handleClick("mobileNumber")}>
								<span class="btn-wrap">
									<span class="text-one"><CiEdit className='edit-logo'/>Edit</span>
									<span class="text-two"><CiEdit className='edit-logo'/>Edit</span>
								</span>
							    </button> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='profile-wrapper'>
                    <div className='preferences'>
                    <div className='profile-header'>
                        <h4>Preferences</h4>
                    </div>
                    {/* <ToggleButton /> */}
                    
                        {Object.entries(props.preferences).map(([key,value],idx) => {
                            return(
                                <div key={idx} className='preference'>
                                    <p>{key}</p>
                                    <div className='toggle-btn-container'>
                                        <div class="form-check form-switch toggle-btn">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={value} onChange={() => handleToggle(key)}/>
                                        </div>
                                    </div>
                                </div>)
                        })}
                        {/* <div className='preference'>
                            <p>Analytical Updates</p>
                            <div className='toggle-btn-container'>
                                <div class="form-check form-switch toggle-btn">
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={props.analyticalUpdates} onChange={handleToggle}/>
                                </div>
                            </div>
                        </div> */}
                        
                    </div>
                    {/* <div className='profile-body'>
                        <div className="newsletter-box">
                            <div className='page-wrapper'>
                                <div className='register-one'>
                                <div className="form-group">
                                    <div className='preferences-toggle'>
                                        <p>Key Updates</p>
                                        <select name='keyUpdates' id='keyUpdates' value={props.keyUpdates} onChange={handleLanguageChange}>

                                            <option value="1">On</option>
                                            <option value="0">Off</option>
                                        </select>
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div> */}
                </div>                
			</div>
		</div>
	</section>
    </div>
    
  )
}

export default UserProfile

  