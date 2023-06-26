import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; 
import { Slide } from "react-awesome-reveal";


export function ContactForm() {
    const form = useRef();

    const [formSubmitted, setFormSubmitted] = useState(false)


    const sendEmail = (e) => {
      e.preventDefault(e);
  
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setFormSubmitted(true)
    }

  return (
    <section className='h-[80dvh] xl:h-[0]'>
        <div className='xl:absolute xl:z-2 xl:top-[10dvh] w-[85vw] font-raleway left-0 xl:left-[50vw] text-white text-base px-12 pt-16 md:pt-32 xl:pt-20 md:text-lg md:pl-20 xl:text-lg lg:py-16 lg:px-24'>

            <div className='flex flex-row'>
                <Slide duration={2000}>
                    <div className='flex xl:hidden uppercase font-bold text-2xl md:text-3xl xl:text-4xl text-saturated-green underline-offset-4 decoration-dark-green tracking-[0.2em] xl:tracking-[0.3em]'><p className='first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>Send&nbsp;</p><p className='first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>Message</p></div>
                </Slide>
            </div>

            {formSubmitted ? 
            
            <div className='flex flex-col flex-wrap justify-center items-center w-[70vw] xl:w-[35vw] h-[60dvh] xl:h-[68dvh] pb-20'>
                <p className='text-2xl'>Your message has been received. I will be in touch shortly.</p>
            </div>

            :

            <form ref={form} onSubmit={sendEmail} className='flex flex-col w-[70vw] xl:w-[35vw]'>
                <label className='text-white pt-4 md:pt-16 xl:pt-12 pb-1'>Name:</label>
                    <input type="text" required name="user_name" defaultValue={null} className='text-black bg-saturated-green pl-2 rounded-md focus:outline focus:outline-dark-green focus:outline-2 focus:outline-offset-2' />
                <label className='text-white pt-6 md:pt-12 xl:pt-4 pb-1'>Email:</label>
                    <input type="email" required name="user_email" className='text-black bg-saturated-green pl-2 rounded-md focus:outline focus:outline-dark-green focus:outline-2 focus:outline-offset-2' />
                <label className='text-white pt-6 md:pt-12 xl:pt-4 pb-1'>Message:</label>
                    <textarea name="message" required className='text-black bg-saturated-green pl-2 rounded-md resize-none focus:outline focus:outline-dark-green focus:outline-2 focus:outline-offset-2' />
                <div className='pt-6 md:pt-12 xl:pt-6'>
                    <input type="submit" value="Send" className='bg-saturated-green text-dark-green font-bold uppercase py-1 px-4 rounded-md hover:outline hover:outline-dark-green hover:outline-2 hover:outline-offset-2' />
                </div>
            </form>
            }
        </div>
    </section>
  )
}
