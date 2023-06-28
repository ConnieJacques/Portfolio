import { Slide } from "react-awesome-reveal";
import resume from '../files/Connie_Jacques_Resume.pdf'


export function AboutMeComponent() {

    return (
        <section className='h-[80dvh] w-[90vw] top-[10dvh]'>
            <div className='font-raleway text-base pl-10 pr-12 sm:pl-12 md:pt-24 md:pl-20 xl:pt-16 xl:pl-32 md:text-lg lg:py-16 lg:px-24'>
                <div className='flex flex-row'>
                    <Slide duration={2000}>
                        <h2 className='pb-6 md:pb-12 xl:pb-6 pt-8 flex uppercase font-bold text-2xl md:text-3xl xl:text-4xl text-saturated-green tracking-[0.2em] xl:tracking-[0.3em]'><p className='first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>About&nbsp;</p><p className='first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>Me</p></h2>
                    </Slide>
                </div>
                <p className='text-white text-sm md:text-lg xl:text-lg w-[75dvw]'>
                    Hi, I'm Connie and I'm a full stack web developer with a passion for back-end development.<br /><br />
                    My journey into web development began when I realised it was time to begin a transition out of my current career and decided to enrol in Coder Academy's 10 month coding boot camp in October 2022.<br /><br />
                    I have experience with OOP languages, MVC architecture, SQL and NoSQL database design and manipulation, test driven development, agile methodology and version control, among other things.
                </p>
                <div className='flex flex-row justify-center pt-8'>
                    <a href={resume} target='_blank' rel='noopener noreferrer'><button label='resume' className='bg-saturated-green text-dark-green font-bold uppercase py-1 px-4 rounded-md hover:outline hover:outline-dark-green hover:outline-2 hover:outline-offset-2'>Resume</button></a>
                </div>
            </div> 
        </section>
    )
}