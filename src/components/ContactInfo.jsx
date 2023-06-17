import gitHubIcon from '../images/icons8-github.svg'
import linkedInIcon from '../images/icons8-linkedin.svg'
import emailIcon from '../images/icons8-email-50.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export function ContactInfo() {
    const email = "connie.jacques91@gmail.com";
    const subject = "Interest in Web Development Work";

    return (
        <section className='h-[80vh] sm:h-[85vh]'>
            {/* <div className='-z-1 absolute top-20 left-0 text-white font-raleway text-base px-12 pt-32 xl:pt-32 sm:text-6xl md:text-8xl lg:text-lg lg:py-16 lg:px-24'> */}
            <div className='text-white font-raleway text-base px-12 pt-32 xl:pt-32 sm:text-6xl md:text-8xl lg:text-lg lg:py-16 lg:px-24'>
                
                <div className='flex flex-row'>
                <div data-aos='slide-right' data-aos-duration="1500">
                    <p className='uppercase font-bold text-4xl text-saturated-green underline underline-offset-4 decoration-dark-green'>Contact Me</p>
                    {/* <p className='uppercase font-bold text-4xl text-saturated-green underline underline-offset-4 decoration-dark-green'>e</p> */}
                </div>
                </div>

                <div>
                    <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}>
                        <div className='flex flex-row items-center pb-6 pt-12'>
                            <img src={emailIcon} alt="GitHub Icon" className="h-10 w-10 md:h-8 md:w-8 md:mr-3"/><p className='pl-4'>connie.jacques91@gmail.com</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/connie-jacques-53046b261/" target="_blank" rel="noreferrer">
                        <div className='flex flex-row items-center py-6'>
                            <img src={linkedInIcon} alt="GitHub Icon" className="h-10 w-10 md:h-8 md:w-8 md:mr-3"/><p className='pl-4'>/connie-jacques-53046b261/</p>
                        </div>
                    </a>

                    <a href="https://github.com/ConnieJacques" target="_blank" rel="noreferrer">
                        <div className='flex flex-row items-center pt-6'>
                            <img src={gitHubIcon} alt="GitHub Icon" className="h-10 w-10 md:h-8 md:w-8 md:mr-3"/><p className='pl-4'>github.com/ConnieJacques</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    ) 
}