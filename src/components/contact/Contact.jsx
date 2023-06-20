import React, { useState,  useRef } from 'react';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com' // Importing emailjs

function Contact() {
  const [formElements, setformElements] = useState("")

  const handleOnChange = (e) => {
    console.log("Handle on change");
    setformElements(e.target.value);
  }

  // Taken from emailjs docs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2mp7tzs', 'template_8t9vhsi', form.current, '7Tr7DoGXcC_4hpdqM')

    setformElements('');
  };

  return (
    <section id='contact'>
      <h5>Get In Touch With Me</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <HiOutlineMail className='option-icon'/>
            <h4>Email</h4>
            <h6>ajmat1130666@gmail.com</h6>
            {/* Below href will take user to the gmail and will automatically populate their gmail with reciever email id as mentioned below */}
            <a href="mailto:ajmat1130666@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact-option">
            <BsLinkedin className='option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Ajmat Kathat</h5>
            {/* Below href will take user to the gmail and will automatically populate their gmail with reciever email id as mentioned below */}
            <a href="https://linkedin.com/in/ajmat-kathat-0a5b45252" target="_blank">Send a message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className='option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91-95212xxxxx</h5>
            {/* Below href will take user to the gmail and will automatically populate their gmail with reciever email id as mentioned below */}
            <a href="https://api.whatsapp.com/send?phone=9521200877" target="_blank">Send a message</a>
          </article>
        </div>

        {/* Using useRef hook for the action of the form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Your Name' required/>
          <input type="email" name='email' placeholder='Enter Your Email' required />
          <textarea onChange={handleOnChange} value={formElements} name="message" rows="7" placeholder='Enter Your Message' required></textarea>
          <p className='success'>Success!</p>
          <button type='submit' className='btn btn-primary submitButton'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
