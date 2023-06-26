import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

export function HomePage() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      
    return(
        <section className="h-[80dvh]">
            <div className='flex flex-col justify-center items-center h-[80dvh]'>
                <div data-aos="fade-in" data-aos-duration="5000">
                    <p className="font-raleway text-white text-5xl px-12 pb-10 leading-tight md:text-7xl md:leading-snug md:w-[75vw] xl:text-4xl xl:w-[60vw] xl:py-0 xl:px-0"> Hi, I'm Connie and I'm a Back-End Web Developer.</p>
                </div>
            </div>
        </section>
    )
}