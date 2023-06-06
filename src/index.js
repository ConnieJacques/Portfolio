import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { AboutMePage} from './pages/AboutMePage';
import { ContactPage } from './pages/ContactPage';
import { ProjectsPage} from './pages/ProjectsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/about" element={<AboutMePage />} />
                  <Route path="contact" element={<ContactPage />} />
              </Routes>
      {/* <App /> */}
    </BrowserRouter>  
  </React.StrictMode>
);