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
    <section className='h-[80vh] sm:h-[85vh] xl:h-[0]'>
        {/* <div className='-z-1 absolute top-90 xl:top-20 w-[85vw] font-raleway left-0 xl:left-[50vw] text-white text-base px-12 pt-16 xl:pt-16 sm:text-6xl md:text-8xl lg:text-lg lg:py-16 lg:px-24'> */}
        <div className='absolute z-2 xl:top-[10vh] w-[85vw] font-raleway left-0 xl:left-[50vw] text-white text-base px-12 pt-16 xl:pt-16 sm:text-6xl md:text-8xl lg:text-lg lg:py-16 lg:px-24'>

            <div className='flex flex-row'>
                <div data-aos='slide-right' data-aos-duration="1500">
                    <p className='xl:hidden font-raleway font-bold uppercase font-bold text-4xl text-saturated-green underline underline-offset-4 decoration-dark-green'>Send a message</p>
                {/* <p className='font-raleway font-bold self-end uppercase font-bold text-4xl text-saturated-green underline underline-offset-4 decoration-dark-green'>e</p> */}
                </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className='flex flex-col w-[70vw] xl:w-[35vw]'>
                <label className='text-white pt-12 pb-1'>Name:</label>
                    <input type="text" required name="user_name" defaultValue={null} className='text-black bg-saturated-green pl-2 rounded-md focus:outline focus:outline-dark-green focus:outline-2 focus:outline-offset-2' />
                <label className='text-white pt-6 xl:pt-4 pb-1'>Email:</label>
                    <input type="email" required name="user_email" className='text-black bg-saturated-green pl-2 rounded-md focus:outline focus:outline-dark-green focus:outline-2 focus:outline-offset-2' />
                <label className='text-white pt-6 xl:pt-4 pb-1'>Message:</label>
                    <textarea name="message" required className='text-black bg-saturated-green pl-2 rounded-md resize-none focus:outline focus:outline-dark-green focus:outline-2 focus:outline-offset-2' />
                <div className='pt-6'>
                    <input type="submit" value="Send" className='bg-saturated-green text-dark-green font-bold uppercase py-1 px-4 rounded-md hover:outline hover:outline-dark-green hover:outline-2 hover:outline-offset-2' />
                </div>
            </form>
        </div>
    </section>
  )
}
