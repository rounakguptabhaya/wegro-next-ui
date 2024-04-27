import React, { useEffect, useState } from 'react'
import { CiEdit } from "react-icons/ci";


const EditPersonal = (props) => {

    const [values,setValues] = useState(props.userDetail)

    const handleClick = () => {
        props.handleClick(values);
    }  

    // useEffect(() => {
    //     setValues(props.userDetail)
    // },[])

  return (
    <div className='profile-container'>
        <section className="counter-one">
		<div class="auto-container">
			<div className="inner-container">
                <div className='profile-wrapper'>
                    <div className='profile-header'>
                        <h4>Edit Personal Details</h4>
                    </div>
    
                    <div className='profile-body'>
                        <div className="newsletter-box">
                            <label>Your name</label>    
                            <div className="form-group">
                                <input type="text" name="name" value={values.name} placeholder="NA" required onChange={e => setValues({...values, name: e.target.value})}/>                                 
                            </div>
                            <label>Your email</label>
                            <div className="form-group">
                                <input type="email" name="email" value={values.email} placeholder="NA" required onChange={e => setValues({...values, email: e.target.value})}/>
                            </div>
                        </div>
                    </div>
                    <div className='profile-footer'>
                        <button type="submit" class="template-btn btn-style-one" onClick={handleClick}>
                            <span class="btn-wrap">
                                <span class="text-one">Update</span>
                                <span class="text-two">Update</span>
                            </span>
                        </button>
                    </div>
                    
                </div>                
			</div>
		</div>
	</section>
    </div>
  )
}

export default EditPersonal