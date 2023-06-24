import { Slide } from "react-awesome-reveal";


export function EducationComponent() {
    

    return (
        <section className='h-[80dvh] w-[90vw] top-[10dvh]'>
        <div className='font-raleway text-base px-12 xl:pt-16 xl:pl-32 sm:text-6xl md:text-8xl lg:text-lg lg:py-16 lg:px-24'>
            <div className='flex flex-row'>
                <Slide duration={2000}>
                    <h2 className='pb-6 pt-8 flex uppercase font-bold text-2xl xl:text-4xl text-saturated-green tracking-[0.2em] xl:tracking-[0.3em]'><p className='first-letter:text-3xl xl:first-letter:text-5xl first-letter:text-dark-green'>Education</p></h2>
                </Slide>
            </div >
            <p className='text-white text-sm xl:text-xl w-[70dvw] xl:w-[85dvw] xl:h-[50dvh] xl:text-sm xl:flex xl:flex-row xl:flex-wrap'>
                <div className='xl:w-[30dvw]'>
                    <h4 className='uppercase tracking-widest font-bold'>Diploma of Information Technology</h4>
                    <h5 className='xl:py-2'>Coder Academy</h5>
                    <h6>2022 - 2023</h6>
                </div>
                <div className='xl:w-[40dvw] xl:pl-36'>
                    <h4 className='uppercase tracking-widest font-bold'>Certificate IV in Veterinary Nursing</h4>
                    <h5 className='xl:py-2'>TAFE NSW</h5>
                    <h6>2014 - 2016</h6>
                </div>
                <div className='xl:w-[30dvw]'>
                    <h4 className='uppercase tracking-widest font-bold pt-4'>Bachelor of Media and Communications (Honours)</h4>
                    <h5 className='xl:py-2'>University of New Englandy</h5>
                    <h6>2013</h6>
                </div>
                <div className='xl:w-[40dvw] xl:pl-36'>
                    <h4 className='uppercase tracking-widest font-bold pt-4'>Bachelor of Arts (writing and philosophy)</h4>
                    <h5 className='xl:py-2'>University of New England</h5>
                    <h6>2010 - 2012</h6>
                </div>
            </p>
        </div> 
    </section>
    )
}