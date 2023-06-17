import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export function HomePage() {
    return(
        <div className="h-[80vh] sm:h-[85vh]">
            <div className='flex flex-col justify-center items-center h-[85vh]'>
                <div data-aos="fade-in" data-aos-duration="5000">
                    <p className="font-raleway text-white text-5xl px-12 pb-20 leading-tight sm:text-6xl sm:leading-relaxed md:text-8xl md:leading-snug lg:text-5xl lg:py-16 lg:px-24 xl:text-4xl xl:w-[60vw] xl:py-0 xl:px-0"> Hi, I'm Connie and I'm a Back-End Web Developer.</p>
                    {/* <p className="font-raleway -z-1 absolute top-20 left-0 font-courier text-white text-5xl px-12 pt-32 leading-tight sm:text-6xl sm:leading-relaxed md:text-8xl md:leading-snug lg:text-5xl lg:py-16 lg:px-24 xl:text-5xl xl:w-[70vw] "> Hi, I'm Connie and I'm a Back-End Web Developer.</p> */}
                </div>
            </div>
        </div>
    )
}