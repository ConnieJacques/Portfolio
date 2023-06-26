import { NavLink} from "react-router-dom";
import { useState } from "react";


export function NavBar() {
    let activeNavStyle = {
        textDecorationLine: "underline"
    }

    let desktopActiveNavStyle = {
        display: 'none'
    }

    let desktopInactiveNavStyle = {
        paddingRight: '1rem'
    }

    const [isNavOpen, setIsNavOpen] = useState(false);

    return(
        <div className="flex items-center font-raleway">
            <div>
                <section className="MOBILE-MENU flex sm:hidden mr-4">
                    <div className="HAMBURGER-ICON space-y-2" 
                        onClick={() => setIsNavOpen((prev) => !prev)}>
                            <span className="block h-0.5 w-8 bg-dark-green"></span>
                            <span className="block h-0.5 w-8 bg-dark-green"></span>
                            <span className="block h-0.5 w-8 bg-dark-green"></span>
                    </div>

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div className="absolute top-0 right-0 px-4 py-4"
                                onClick={() => setIsNavOpen(false)}>
                                <svg
                                    className="h-8 w-8 text-dark-green focus:bg-none"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>


                            <nav>
                                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-end text-lg underline-offset-[5px]">
                                    <li className="text-dark-green uppercase pb-12 pr-5">
                                        <NavLink to='/' style={({isActive}) => isActive ? activeNavStyle : undefined}>Home</NavLink>
                                    </li>
                                    <li className="text-dark-green uppercase pb-12 pr-5">
                                        <NavLink to='/projects' style={({isActive}) => isActive ? activeNavStyle : undefined}>Projects</NavLink>
                                    </li>
                                    <li className="text-dark-green uppercase pb-12 pr-5">
                                        <NavLink to='/about' style={({isActive}) => isActive ? activeNavStyle : undefined}>About</NavLink>
                                    </li>
                                    <li className="text-dark-green uppercase pr-5">
                                        <NavLink to='/contact' style={({isActive}) => isActive ? activeNavStyle : undefined}>Contact</NavLink>
                                    </li>
                                </ul>
                            </nav>


                        </div>
                </section>
                
                    <nav>
                        <ul className="DESKTOP-MENU hidden space-x-0 text-dark-green font-raleway uppercase font-medium xl:tracking-[0.2rem] sm:flex sm:text-sm md:text-lg md:text-xl">
                            <li className='xl:hover:text-saturated-green'>
                                <NavLink to='/' style={({isActive}) => isActive ? desktopActiveNavStyle : desktopInactiveNavStyle}>Home</NavLink>
                            </li>
                            <li className='xl:hover:text-saturated-green'>
                                <NavLink to='/projects' style={({isActive}) => isActive ? desktopActiveNavStyle : desktopInactiveNavStyle}>Projects</NavLink>
                            </li>
                            <li className='xl:hover:text-saturated-green'>
                                <NavLink to='/about' style={({isActive}) => isActive ? desktopActiveNavStyle : desktopInactiveNavStyle}>About</NavLink>
                            </li>
                            <li className='xl:hover:text-saturated-green md:pr-8'>
                                <NavLink to='/contact' style={({isActive}) => isActive ? desktopActiveNavStyle : desktopInactiveNavStyle}>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
            </div>
        </div>
    )
}