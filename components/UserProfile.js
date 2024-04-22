import React from 'react'
import { CiEdit } from "react-icons/ci";


const UserProfile = (props) => {

  const handleClick = (op) => {
    props.handleClick(op);
  }  

  return (
    <div className='profile-container'>
        <section className="counter-one">
		<div class="auto-container">
			<div className="inner-container">
                <div className='profile-wrapper'>
                    <div className='profile-header'>
                        <h4>Personal Details</h4>
                    </div>
    
                    <div className='profile-body'>
                        <div className="newsletter-box">
                            <label>Your name</label>
                            <div className="form-group">
                                
                                <input readOnly type="text" name="name" value={props.name} placeholder="NA" required />
                                <button type="submit" class="template-btn btn-style-one" onClick={() => handleClick("name")}>
								<span class="btn-wrap">
									<span class="text-one"><CiEdit className='edit-logo'/>Edit</span>
									<span class="text-two"><CiEdit className='edit-logo'/>Edit</span>
								</span>
							    </button>                                
                            </div>
                            <label>Your email</label>
                            <div className="form-group">
                                <input readOnly type="email" name="email" value={props.email} placeholder="NA" required />
                                <button name='email' type="submit" class="template-btn btn-style-one" onClick={() => handleClick("email")}>
								<span class="btn-wrap">
									<span class="text-one"><CiEdit className='edit-logo'/>Edit</span>
									<span class="text-two"><CiEdit className='edit-logo'/>Edit</span>
								</span>
							    </button>
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
                                <button name='mobileNumber' type="submit" class="template-btn btn-style-one" onClick={() => handleClick("mobileNumber")}>
								<span class="btn-wrap">
									<span class="text-one"><CiEdit className='edit-logo'/>Edit</span>
									<span class="text-two"><CiEdit className='edit-logo'/>Edit</span>
								</span>
							    </button>
                            </div>
                        </div>
                    </div>
                </div>
                
			</div>
		</div>
	</section>
    </div>
    
  )
}

export default UserProfile