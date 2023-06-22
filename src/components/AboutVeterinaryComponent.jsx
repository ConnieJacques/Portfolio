import { Slide } from "react-awesome-reveal";


export function VeterinaryComponent() {
    

    return (
        <section className='h-[80dvh] w-[90vw] top-[10dvh]'>
        <div className='font-raleway text-base px-12 xl:pt-16 xl:pl-32 sm:text-6xl md:text-8xl lg:text-lg lg:py-16 lg:px-24'>
            <div className='flex flex-row'>
                <Slide duration={2000}>
                    <h2 className='pb-6 pt-8 flex uppercase font-bold text-2xl xl:text-4xl text-saturated-green tracking-[0.2em] xl:tracking-[0.3em]'><p className='first-letter:text-3xl xl:first-letter:text-5xl first-letter:text-dark-green'>Change&nbsp;</p><p className='first-letter:text-3xl xl:first-letter:text-5xl first-letter:text-dark-green'>Time</p></h2>
                </Slide>
            </div>
            <p className='text-white text-sm xl:text-lg w-[70dvw]'>                
                In 2022 I had worked in the veterinary industry for over 8 years and it was time to make a change.<br /><br />
                Unfortunately, although I truly the work, the clients, the adorable animals, and my colleagues, 
                veterinary medicine is one of the most stressful, emotionally draining and burn-out prone career paths anyone can choose to follow. 
                This is reflected in the fact that veterinary staff are approximately 4 times more likely to end their own lives than staff in other industries.<br /><br />
                For this reason, it is time for me to move on from the veterinary world. 
            </p>
        </div> 
    </section>
    )
}

