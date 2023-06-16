import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label className='text-white'>Name:</label>
      <input type="text" name="user_name" defaultValue={null} className='text-black' />
      <label className='text-white'>Email:</label>
      <input type="email" name="user_email" className='text-black' />
      <label className='text-white'>Message:</label>
      <textarea name="message" className='text-red' />
      <input type="submit" value="Send" className='bg-white' />
    </form>
  )
}
