import gitHubIcon from '../images/icons8-github.svg'
import linkedInIcon from '../images/icons8-linkedin.svg'
import emailIcon from '../images/icons8-email-50.png'
import { Slide } from "react-awesome-reveal";


export function ContactInfo() {
    const email = "connie.jacques91@gmail.com";
    const subject = "Interest in Web Development Work";

    return (
        <section className='h-[80dvh]'>                
            <div className='relative w-[90vw] md:w-[85vw] md:h-[85dvh] xl:w-[40vw] text-white font-raleway text-sm px-12 md:pt-16 md:pl-20 md:text-2xl xl:pt-32 xl:text-lg lg:py-16 lg:px-24'>
                <div className='flex flex-row'>
                    <Slide duration={2000}>
                        <h2 className='flex uppercase font-bold text-2xl md:text-3xl xl:text-4xl text-saturated-green tracking-[0.2em] xl:tracking-[0.3em]'><p className='first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>Contact&nbsp;</p><p className='first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>Me</p></h2>
                    </Slide>
                </div>

                <div>
                    <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}>
                        <div className='flex flex-row items-center pb-6 md:pb-12 xl:pb-6 pt-12 md:pt-24 xl:pt-12'>
                            <img src={emailIcon} alt="GitHub Icon" className="h-10 w-10 xl:h-8 xl:w-8 md:mr-3"/><p className='pl-4 underline decoration-dark-green underline-offset-2'>connie.jacques91@gmail.com</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/connie-jacques-53046b261/" target="_blank" rel="noreferrer">
                        <div className='flex flex-row items-center py-6 md:py-12 xl:py-6'>
                            <img src={linkedInIcon} alt="GitHub Icon" className="h-10 w-10 xl:h-8 xl:w-8 md:mr-3"/><p className='pl-4 underline decoration-dark-green underline-offset-2'>/connie-jacques-53046b261/</p>
                        </div>
                    </a>

                    <a href="https://github.com/ConnieJacques" target="_blank" rel="noreferrer">
                        <div className='flex flex-row items-center pt-6 md:pt-12 xl:pt-6'>
                            <img src={gitHubIcon} alt="GitHub Icon" className="h-10 w-10 xl:h-8 xl:w-8 md:mr-3"/><p className='pl-4 underline decoration-dark-green underline-offset-2'>github.com/ConnieJacques</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    ) 
}