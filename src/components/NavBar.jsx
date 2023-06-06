import { Link } from "react-router-dom";
import { useState } from "react";


export function NavBar() {
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
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-end text-lg">
                <li className="text-dark-green uppercase pb-12 pr-5">
                    <Link to='/'>Home</Link>
                </li>
                <li className="text-dark-green uppercase pb-12 pr-5">
                    <Link to='/projects'>Projects</Link>
                </li>
                <li className="text-dark-green uppercase pb-12 pr-5">
                    <Link to='/about'>About Me</Link>
                </li>
                <li className="text-dark-green uppercase pr-5">
                    <Link to='/contact'>Contact Me</Link>
                </li>
            </ul>
        </nav>


                    </div>
                </section>
                <nav>
            <ul className="DESKTOP-MENU hidden space-x-8 text-dark-green font-courier sm:flex sm:text-2xl">
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
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