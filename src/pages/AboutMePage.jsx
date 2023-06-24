
import { AboutMeComponent } from "../components/AboutMeComponent";
import { VeterinaryOverlap } from "../components/AboutOverlapVeterinary";
import { TechComponent } from "../components/AboutTechStack";
import { VeterinaryComponent } from "../components/AboutVeterinaryComponent";



export function AboutMePage() {
    return (
    <div className='h-[80dvh]'>
        <div className='absolute z-1 top-[10dvh]'>
            <div className="carousel carousel-vertical w-[90vw] h-[80dvh] pt-0">
                <div id='item1' className="carousel-item h-full">
                    <AboutMeComponent />
                        <div className='relative top-[25dvh] left-[-90dvw] xl:left-[-87.5dvw]'>
                            <div className='bg-saturated-green p-2 rounded-r-2xl'>
                                <div className="flex flex-col">
                                    <a href="#item1" className="h-[1.7rem] text-dark-green font-ariel text-4xl">^</a> 
                                    <a href="#item1" className='h-3 w-3 border-dark-green rounded-full border-2 text-transparent mb-2 ml-[0.32rem]'>.</a>
                                    <a href="#item2" className='h-3 w-3 bg-dark-green rounded-full text-transparent mb-2 ml-[0.32rem]'>.</a>
                                    <a href="#item3" className='h-3 w-3 bg-dark-green rounded-full text-transparent mb-2 ml-[0.32rem]'>.</a> 
                                    <a href="#item4" className='h-3 w-3 bg-dark-green rounded-full text-transparent ml-[0.32rem]'>.</a> 
                                    <a href="#item2" className="h-[1.7rem] text-dark-green font-ariel rotate-180 text-4xl">^</a>
                                </div>
                            </div>
                        </div>
                </div> 
                <div id='item2' className="carousel-item h-full">
                    <VeterinaryComponent />
                        <div className='relative top-[25dvh] left-[-90dvw] xl:left-[-87.5dvw]'>
                                <div className='bg-saturated-green p-2 rounded-r-2xl'>
                                    <div className="flex flex-col">
                                        <a href="#item1" className="h-[1.7rem] text-dark-green font-ariel text-4xl">^</a> 
                                        <a href="#item1" className='h-3 w-3 bg-dark-green rounded-full text-transparent mb-2 ml-[0.32rem]'>.</a>
                                        <a href="#item2" className='h-3 w-3 border-dark-green rounded-full border-2 text-transparent mb-2 ml-[0.32rem]'>.</a>
                                        <a href="#item3" className='h-3 w-3 bg-dark-green rounded-full text-transparent mb-2 ml-[0.32rem]'>.</a> 
                                        <a href="#item4" className='h-3 w-3 bg-dark-green rounded-full text-transparent ml-[0.32rem]'>.</a> 
                                        <a href="#item3" className="h-[1.7rem] text-dark-green font-ariel rotate-180 text-4xl">^</a>
                                    </div>
                                </div>
                            </div>
                </div> 
                <div id='item3' className="carousel-item h-full">
                    <VeterinaryOverlap />
                        <div className='relative top-[25dvh] left-[-90dvw] xl:left-[-87.5dvw]'>
                                <div className='bg-saturated-green p-2 rounded-r-2xl'>
                                    <div className="flex flex-col">
                                        <a href="#item2" className="h-[1.7rem] text-dark-green font-ariel text-4xl">^</a> 
                                        <a href="#item1" className='h-3 w-3 bg-dark-green rounded-full text-transparent mb-2 ml-[0.32rem]'>.</a>
                                        <a href="#item2" className='h-3 w-3 bg-dark-green rounded-full text-transparent mb-2 ml-[0.32rem]'>.</a>
                                        <a href="#item3" className='h-3 w-3 border-dark-green rounded-full border-2 text-transparent mb-2 ml-[0.32rem]'>.</a> 
                                        <a href="#item4" className='h-3 w-3 bg-dark-green rounded-full text-transparent mb-2 ml-[0.32rem]'>.</a> 
                                        <a href="#item4" className="h-[1.7rem] text-dark-green font-ariel rotate-180 text-4xl">^</a>
                                    </div>
                                </div>
                            </div>
                </div> 
                <div id='item4' className="carousel-item h-full">
                    <TechComponent />
                        <div className='relative top-[25dvh] left-[-90dvw]'>
                                <div className='bg-saturated-green p-2 rounded-r-2xl'>
                                    <div className="flex flex-col">
                                        <a href="#item3" className="h-[1.7rem] text-dark-green font-ariel text-4xl">^</a> 
                                        <a href="#item1" className='h-3 w-3 bg-dark-green rounded-full text-transparent mb-2 ml-[0.32rem]'>.</a>
                                        <a href="#item2" className='h-3 w-3 bg-dark-green rounded-full text-transparent mb-2 ml-[0.32rem]'>.</a>
                                        <a href="#item3" className='h-3 w-3 bg-dark-green rounded-full text-transparent mb-2 ml-[0.32rem]'>.</a> 
                                        <a href="#item4" className='h-3 w-3 border-dark-green rounded-full border-2 text-transparent ml-[0.32rem]'>.</a> 
                                        <a href="#item4" className="h-[1.7rem] text-dark-green font-ariel rotate-180 text-4xl">^</a>
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
                    <a href="#item2" className='h-3 w-3 bg-dark-green rounded-full text-transparent mb-2 ml-[0.32rem]'>.</a>
                    <a href="#item3" className='h-3 w-3 bg-dark-green rounded-full text-transparent mb-2 ml-[0.32rem]'>.</a> 
                    <a href="#item4" className='h-3 w-3 bg-dark-green rounded-full text-transparent ml-[0.32rem]'>.</a> 
                    <a href="#item2" className="h-[1.7rem] text-dark-green font-ariel rotate-180 text-4xl">^</a>
                </div>
            </div>
        </div> */}
    </div>
</div>
    )
}