import { ContactForm } from "../components/ContactForm";
import { ContactInfo } from "../components/ContactInfo";

export function ContactPage() {

    return (
        <div>
            <div className='h-[80dvh] sm:hidden'>
                <div className='absolute z-1 top-[10dvh]'>
                    <div className="carousel carousel-vertical w-[90vw] h-[80dvh] pt-0">
                        <div id='item1' className="carousel-item h-full pt-20">
                            <ContactInfo />
                                <div className='relative top-[15dvh] left-[-85dvw]'>
                                        <div className='bg-saturated-green p-2 rounded-r-2xl'>
                                            <div className="flex flex-col">
                                                <a href="#item2" className="h-[1.7rem] text-dark-green font-ariel text-4xl">^</a> 
                                                <a href="#item1" className='h-3 w-3 border-dark-green rounded-full border-2 text-transparent mb-2 ml-[0.32rem]'>.</a>
                                                <a href="#item2" className='h-3 w-3 bg-dark-green rounded-full text-transparent ml-[0.32rem]'>.</a>
                                                <a href="#item2" className="h-[1.7rem] text-dark-green font-ariel rotate-180 text-4xl">^</a>
                                            </div>
                                        </div>
                                    </div>
                        </div> 
                        <div id='item2' className="carousel-item h-full">
                            <ContactForm />
                                <div className='relative top-[25dvh] left-[-85dvw]'>
                                    <div className='bg-saturated-green p-2 rounded-r-2xl'>
                                        <div className="flex flex-col">
                                            <a href="#item1" className="h-[1.7rem] text-dark-green font-ariel text-4xl">^</a> 
                                            <a href="#item1" className='h-3 w-3 bg-dark-green rounded-full text-transparent mb-2 ml-[0.32rem]'>.</a>
                                            <a href="#item2" className='h-3 w-3 border-dark-green rounded-full border-2 text-transparent ml-[0.32rem]'>.</a>
                                            <a href="#item1" className="h-[1.7rem] text-dark-green font-ariel rotate-180 text-4xl">^</a>
                                        </div>
                                    </div>
                                </div>
                        </div> 
                    </div>
                    

                {/* <div className='absolute top-[25dvh] left-0'>
                    <div className='bg-saturated-green p-2 rounded-r-2xl'>
                        <div className="flex flex-col">
                            <a href="#item1" className="h-[1.7rem] text-dark-green font-ariel text-4xl">^</a> 
                            <a href="#item1" className='h-3 w-3 bg-dark-green rounded-full text-transparent mb-2 ml-[0.32rem]'>.</a>
                            <a href="#item2" className='h-3 w-3 bg-dark-green rounded-full text-transparent ml-[0.32rem]'>.</a> 
                            <a href="#item2" className="h-[1.7rem] text-dark-green font-ariel rotate-180 text-4xl p-0">^</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

        <div className='hidden sm:block'>
            <ContactInfo />
            <ContactForm />
        </div>
    </div>
    )
}