import { HeaderNameWithRedirectToHomePage } from "./HeaderName"
import { NavBar } from "./NavBar"
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutMePage} from '../pages/AboutMePage';
import { ContactPage } from '../pages/ContactPage';
import { ProjectsPage} from '../pages/ProjectsPage';


export function Header() {
    return (
        <div className="flex flex-row justify-between">
            <HeaderNameWithRedirectToHomePage />
            <NavBar />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/about" element={<AboutMePage />} />
                  <Route path="contact" element={<ContactPage />} />
              </Routes>
        </div>
    )
}