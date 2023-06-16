import gitHubIcon from '../images/icons8-github.svg'
import linkedInIcon from '../images/icons8-linkedin.svg'
import emailIcon from '../images/icons8-email-50.png'
import etsyIcon from '../images/icons8-etsy.svg'
// import { Copyright } from './Copyright'


export function Footer() {
    const email = "connie.jacques91@gmail.com";
    const subject = "Interest in Web Development Work";

    return (
        <div className='flex flex-row justify-between items-center md:justify-center border-t border-dark-green py-4 px-6 h-[5vh]'>
            <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}>
                <img src={emailIcon} alt="GitHub Icon" className="h-6 w-6 md:h-8 md:w-8 md:mr-3"/>
            </a>
            <a href="https://www.linkedin.com/in/connie-jacques-53046b261/" target="_blank" rel="noreferrer">
                <img src={linkedInIcon} alt="GitHub Icon" className="h-6 w-6 md:h-8 md:w-8 md:mr-3"/>
            </a>
            <a href="https://github.com/ConnieJacques" target="_blank" rel="noreferrer">
                <img src={gitHubIcon} alt="GitHub Icon" className="h-6 w-6 md:h-8 md:w-8 md:mr-3"/>
            </a>
            <a href="https://www.etsy.com/au/shop/CoenobitaCollective" target="_blank" rel="noreferrer">
                <img src={etsyIcon} alt="GitHub Icon" className="h-6 w-6 md:h-8 md:w-8"/>
            </a>
            {/* <Copyright /> */}
        </div>
    )
}