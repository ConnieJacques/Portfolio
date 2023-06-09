import { Slide } from "react-awesome-reveal";


export function VeterinaryComponent() {

    return (
        <section className='h-[80dvh] w-[90vw] top-[10dvh]'>
            <div className='font-raleway text-base pl-10 pr-12 sm:pl-12 md:pt-24 md:pl-20 xl:pt-16 xl:pl-32 md:text-lg lg:py-16 lg:px-24'>
                <div className='flex flex-row'>
                    <Slide duration={2000}>
                        <h2 className='pb-6 md:pb-12 xl:pb-6 pt-8 flex uppercase font-bold text-2xl md:text-3xl xl:text-4xl text-saturated-green tracking-[0.2em] xl:tracking-[0.3em]'><p className='first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>Change&nbsp;</p><p className='first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>Time</p></h2>
                    </Slide>
                </div>
                <p className='text-white text-sm md:text-lg xl:text-lg w-[75dvw]'>                
                    By 2022 I had worked in the veterinary industry for over 8 years and it was time to make a change.<br /><br />
                    Unfortunately, although I truly loved the work, the clients, the adorable animals, and my colleagues, 
                    veterinary medicine is one of the most stressful, emotionally draining and burn-out prone career paths anyone can choose to follow. 
                    This is reflected in the fact that veterinary staff are approximately 4 times more likely to end their own lives than staff in other industries.<br /><br />
                    For this reason, it was time for me to move on from the veterinary world. 
                </p>
            </div> 
    </section>
    )
}

