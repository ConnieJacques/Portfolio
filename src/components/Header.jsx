import { HeaderNameWithRedirectToHomePage } from "./HeaderName"
import { NavBar } from "./NavBar"


export function Header() {
    return (
        <div className="flex flex-row justify-between border-b border-dark-green h-[10dvh]">
            <HeaderNameWithRedirectToHomePage />
            <NavBar />
        </div>
    )
}