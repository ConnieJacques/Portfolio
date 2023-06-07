import { NavLink} from "react-router-dom";
import { useState } from "react";


export function NavBar(props) {
    let activeNavStyle = {
        textDecorationLine: "underline"
    }

    const [isNavOpen, setIsNavOpen] = useState(false);

    return(
        <div className="flex items-center">
            <div>
                <section className="MOBILE-MENU flex sm:hidden">
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
            <ul className="DESKTOP-MENU hidden space-x-8 text-dark-green font-railway uppercase font-medium sm:flex sm:text-sm md:text-lg md:text-xl lg:text-xl xl:text-2xl underline-offset-[5px]">
                <li>
                    <NavLink to='/' style={({isActive}) => isActive ? activeNavStyle : undefined}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/projects' style={({isActive}) => isActive ? activeNavStyle : undefined}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to='/about' style={({isActive}) => isActive ? activeNavStyle : undefined}>About</NavLink>
                </li>
                <li className="md:pr-4">
                    <NavLink to='/contact' style={({isActive}) => isActive ? activeNavStyle : undefined}>Contact</NavLink>
                </li>
            </ul>
        </nav>
            </div>
            {/* <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style> */}
        </div>
    )
}