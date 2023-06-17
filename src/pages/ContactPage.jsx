import { ContactForm } from "../components/ContactForm";
import { ContactInfo } from "../components/ContactInfo";
import { Background } from '../components/Background';


// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';




export function ContactPage() {
    return (
        <div>
            {/* <CarouselProvider className="p-0 m-0 *-0"
                naturalSlideWidth={0}
                naturalSlideHeight={0}
                totalSlides={2}
            >

                <Slider>
                    <Slide index={0} className="text-white"><ContactInfo /></Slide>
                    <Slide index={1} className="text-white h-0"><ContactForm /></Slide>
                </Slider>
                <ButtonBack className="text-white">Back</ButtonBack>
                <ButtonNext className="text-white">Next</ButtonNext>
                <Dot className="bg-white"/>
            </CarouselProvider> */}
            <ContactInfo />
            <div className="sm:hidden">
                <Background />
            </div>
            <ContactForm />
        </div>
    )
}