import React, { useState } from 'react';
import complain from "../images/complain.png"
const Citi_DashBoard = () => {
    const [complaintType, setComplaintType] = useState(''); // Default value is an empty string
    const [selectedFile, setSelectedFile] = useState(null);

    const handleComplaintTypeChange = (event) => {
        setComplaintType(event.target.value);
    }
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform any submission logic here
        console.log("Complaint type selected:", complaintType);
    }
    

    return (
        <section className="CDasboard">
            <div className="container mt-4">
                <div className="CDashboard-content">
                <div className='signin-image'>
            <figure>
              <img src={complain} alt="Sign up" className="code-img" />
            </figure>
          </div>
                    <div className="CDashboard-form">
                        <h2 className="Cheading" >Register Your Complaint</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="complaintType">Type of Complaint:</label>
                            <select
                                id="complaintType"
                                name="complaintType"
                                value={complaintType}
                                onChange={handleComplaintTypeChange}
                            >
                                <option value="" disabled>Select</option>
                                <option value="street_light">Street Light Not Working Properly</option>
                                <option value="sewerage">Sewerage Problem</option>
                                <option value="water_leakage">Leakage in Water Tower</option>
                                <option value="road_patches">Big Patches in the Road</option>
                            </select>
                            <br /><br />


                            <div className="form-group">
                                  <label htmlFor="Name"> </label>
                                  <input type="text" name="name" id="Name" autoComplete='off' placeholder='Name of Applicant' />
                            </div>

                            <div className="form-group">
                                  <label htmlFor="Contact-No"> </label>
                                  <input type="text" name="Contact-No" id="Name" autoComplete='off' placeholder='Contact No' />
                            </div>

                            <div className="form-group">
                                  <label htmlFor="Email">  </label>
                                  <input type="text" name="name" id="Email" autoComplete='off' placeholder=' Your Email' />
                           </div>

                            <div className="form-group">
                                  <label htmlFor="Grievance"> </label>
                                  <input type="text" name="name" id="Grienance" autoComplete='off' placeholder=' Details of Grievance' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Photo">Upload Photo:</label>
                                <input type="file" name="photo" id="Photo"  accept="image/*" onChange={handleFileChange}/>
                            </div>

                            <div className='form-group form-button'>
                                <input type="submit" name="submit-complain" id="submit-complain" className='form-submit' value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Citi_DashBoard;
