import { Slide } from "react-awesome-reveal";


export function AboutMeComponent() {
    

    return (
        <section className='h-[80dvh] w-[90vw] top-[10dvh]'>
        <div className='font-raleway text-base px-12 xl:pt-16 xl:pl-32 sm:text-6xl md:text-8xl lg:text-lg lg:py-16 lg:px-24'>
            <div className='flex flex-row'>
                <Slide duration={2000}>
                    <h2 className='pb-6 pt-8 flex uppercase font-bold text-2xl xl:text-4xl text-saturated-green tracking-[0.2em] xl:tracking-[0.3em]'><p className='first-letter:text-3xl xl:first-letter:text-5xl first-letter:text-dark-green'>About&nbsp;</p><p className='first-letter:text-3xl xl:first-letter:text-5xl first-letter:text-dark-green'>Me</p></h2>
                </Slide>
            </div>
            <p className='text-white text-sm xl:text-lg w-[70dvw]'>
                Hi, I'm Connie and I'm a full stack web developer with a passion for back-end development.<br /><br />
                My journey into web development began when I decided it was time to begin a transition out of my current career and enrolled in Coder Academy's 10 month coding boot camp in October 2022.<br /><br />
                I have experience with OOP languages, MVC architecture, SQL and NoSQL database design and manipulation, test driven development, agile methodology and version control, among other things.
            </p>
        </div> 
    </section>
    )
}