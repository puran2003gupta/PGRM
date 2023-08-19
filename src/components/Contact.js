import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle form submission, e.g., sending data to a server
    console.log('Form submitted:', { name, email, message });
    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    
    <div className="contact-page">
      
      <div className="contact-info ">
        <h2>Contact Information</h2>
        

        <div className='phone-content-info '>
        <label htmlFor="Phone No">
                <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                </label>
       <p>Phone: +123456789</p> 
        </div><br></br>

        <div className='email-content-info '>
        <label htmlFor="Email">
                <i class="zmdi zmdi-email material-icons-name"></i>
                </label>
        <p>Email: example@example.com</p> 
        </div>
        <br></br>

        <div className='address-content-info '>
        <label htmlFor="Address">
        <i class="zmdi zmdi-pin-drop"></i>
                </label>
        <p>Address: 123 Main Street, City</p> 
        </div><br></br>

      </div>
      <div className="vertical-line"></div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='mx-3'>Name </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className='mx-3'>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group" >
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="8"
            />
          </div>
          <button type="submit" className="small-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
