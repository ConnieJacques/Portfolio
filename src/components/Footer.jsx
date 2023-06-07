import gitHubIcon from '../images/icons8-github.svg'
import linkedInIcon from '../images/icons8-linkedin.svg'
import emailIcon from '../images/icons8-email-50.png'
import etsyIcon from '../images/icons8-etsy.svg'
import { Copyright } from './Copyright'


export function Footer() {
    return (
        <div className='flex flex-row justify-between border-t-2 border-dark-green p-4'>
            <img src={emailIcon} alt="GitHub Icon" className="h-8 w-8"/>
            <img src={linkedInIcon} alt="GitHub Icon" className="h-8 w-8"/>
            <img src={gitHubIcon} alt="GitHub Icon" className="h-8 w-8"/>
            <img src={etsyIcon} alt="GitHub Icon" className="h-8 w-8"/>
            <Copyright />
        </div>

    )
}