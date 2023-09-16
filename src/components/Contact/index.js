import './Contact.css';
import Header from "../Header";
import Footer from "../Footer";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    setShowThankYou(true);

    emailjs.sendForm('service_tpcs6mm', 'template_8qtulae', form.current, 'cO1DvCyK6RQbSqgCY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <div>
        <div>
            <Header />
        </div>
        <h1>
        </h1>
        <div className='group'>
            <form ref={form} onSubmit={sendEmail}>
                <fieldset>
                <legend>Drop a Message</legend>
                <div>
                    <label>Name</label>
                </div>
                <div>
                    <input type="text" className="large-input" name="user_name" />
                </div>
                <div>
                    <label>Email</label>
                </div>
                <div>
                    <input type="email" className="large-input" name="user_email" />
                </div>
                <div>
                    <label>Message</label>
                </div>
                <div>
                    <textarea name="message" className="message-input"/>
                </div>
                <div>
                    <input type="submit" className="sbutton" value="Submit" />
                </div>
                </fieldset>
            </form>
            </div>
            {showThankYou && (
        <div className="thank-you-popup">
          <p>Thank you for submitting!</p>
        </div>
      )}
        <div>
            <Footer />
        </div>
    </div>
  );
};

export default Contact;