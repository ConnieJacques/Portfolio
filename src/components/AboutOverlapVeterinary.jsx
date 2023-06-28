import { Slide } from "react-awesome-reveal";


export function VeterinaryOverlap() {

    return (
        <section className='h-[80dvh] w-[90vw] top-[10dvh]'>
            <div className='font-raleway text-base pl-10 pr-12 sm:pl-12 md:pt-24 md:pl-20 xl:pt-16 xl:pl-32 md:text-lg lg:px-24'>
                <div className='flex flex-row'>
                    <Slide duration={2000}>
                        <h2 className='pb-6 md:pb-12 xl:pb-6 pt-8 flex uppercase font-bold text-2xl md:text-3xl xl:text-4xl text-saturated-green tracking-[0.2em] xl:tracking-[0.3em]'><p className='first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>Vet&nbsp;</p><p className='first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>Overlap</p></h2>
                    </Slide>
                </div>
                <div className='text-white text-sm md:text-lg xl:text-lg w-[75vw]'>
                There are many valuable and transferable soft skills that I have mastered in my time in the veterinary industry.
                These include, but are certainly not limited to:<br />
                <ol className='list-disc ml-4 xl:leading-loose'>
                    <li className='pt-2 md:pt-4 xl:pt-0'>Excellent time management, required to ensure that all necessary task are undertaken and completed in an efficient manner.</li>
                    <li className=' pt-2md:pt-4 xl:pt-0'>Amazing verbal and written communication. This skill has been strengthened by my formal study of Media and Communications.</li>
                    <li className='pt-2 md:pt-4 xl:pt-0'>Attention to detail. Essential to preventing harm to patients, clients, and colleagues alike as a failure to notice something small can lead to injury, inappropriate treatment or wasted time.</li>
                </ol>
                </div>
            </div> 
        </section>
    )
}