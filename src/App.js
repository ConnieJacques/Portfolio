// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { PageLayout } from './Layout/PageLayout';
import { HomePage } from './pages/HomePage';
import { AboutMePage} from './pages/AboutMePage';
import { ContactPage } from './pages/ContactPage';
import { ProjectsPage} from './pages/ProjectsPage';



function App() {
  return (
    <div className="webkitDefault bg-black">
      <Routes>
          <Route element={<PageLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutMePage />} />
              <Route path="/contact" element={<ContactPage />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
