import { useLocation } from "react-router-dom";
import { Copyright } from './Copyright'
import { FooterContact } from "./FooterContact";


export function Footer() {
    const location = useLocation()

    return (
        <div className='h-[10dvh]'>
            {(location.pathname === '/contact') ? <Copyright /> : <FooterContact />}
        </div>
    )
}