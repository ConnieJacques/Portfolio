import { HeaderNameWithRedirectToHomePage } from "./HeaderName"
import { NavBar } from "./NavBar"


export function Header() {
    return (
        // <div className="relative">
        <div className="flex flex-row justify-between border-b border-dark-green h-[10vh]">
            <HeaderNameWithRedirectToHomePage />
            <NavBar />
        </div>
        // </div>
    )
}