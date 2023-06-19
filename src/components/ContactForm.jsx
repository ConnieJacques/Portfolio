import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
import { Slide } from "react-awesome-reveal";

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

    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    //   }, []);

  return (
    <section className='h-[80dvh] xl:h-[0]'>
        {/* <div className='-z-1 absolute top-90 xl:top-20 w-[85vw] font-raleway left-0 xl:left-[50vw] text-white text-base px-12 pt-16 xl:pt-16 sm:text-6xl md:text-8xl lg:text-lg lg:py-16 lg:px-24'> */}
        {/* <div className='absolute z-2 xl:top-[10vh] w-[85vw] font-raleway left-0 xl:left-[50vw] text-white text-base px-12 pt-16 xl:pt-16 sm:text-6xl md:text-8xl lg:text-lg lg:py-16 lg:px-24'> */}

        <div className='xl:absolute xl:z-2 xl:top-[10dvh] w-[85vw] font-raleway left-0 xl:left-[50vw] text-white text-base px-12 pt-16 xl:pt-20 sm:text-6xl md:text-8xl lg:text-lg lg:py-16 lg:px-24'>


            <div className='flex flex-row'>
                {/* <div data-aos='slide-right' data-aos-duration="1500"> */}
                {/* <div data-aos='fade-up' data-aos-duration='200'> */}
                <Slide duration={2000}>
                    <div className='flex sm:hidden uppercase font-bold text-2xl xl:text-4xl text-saturated-green underline-offset-4 decoration-dark-green tracking-[0.2em]'><p className='first-letter:text-3xl xl:first-letter:text-5xl first-letter:text-dark-green'>Send&nbsp;</p><p className='first-letter:text-3xl xl:first-letter:text-5xl first-letter:text-dark-green'>Message</p></div>
                </Slide>
                    {/* <p className='xl:hidden font-raleway font-bold uppercase font-bold text-4xl text-saturated-green underline underline-offset-4 decoration-dark-green'>Send a message</p> */}
                {/* <p className='font-raleway font-bold self-end uppercase font-bold text-4xl text-saturated-green underline underline-offset-4 decoration-dark-green'>e</p> */}
                {/* </div> */}
            </div>

            <form ref={form} onSubmit={sendEmail} className='flex flex-col w-[70vw] xl:w-[35vw]'>
                <label className='text-white pt-4 xl:pt-12 pb-1'>Name:</label>
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
