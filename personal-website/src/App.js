import logo from './logo.svg';
//import './cssFiles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './navBar/navBar';
import LandingPage from './landingPage/landingPage';
import ProjectsPages from './projectsPages/baseProjectPage';
import AboutPage from './aboutPage/aboutPage';
import JobsPage from './jobsPage/baseJobPage';
import QualificationsPage from './qualificationsPage/baseQualificationsPage';



/***
 * Acts as BrowserRouter for this site (as per usual in a React project).
 * */

function App() {
  return (
      <div className="App">
          
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<NavBar />}>
                      <Route index element={<LandingPage />} />
                      <Route path="baseProjectPage" element={<ProjectsPages />} />
                      <Route path="aboutPage" element={<AboutPage />} />
                      <Route path="baseJobPage" element={<JobsPage />} />
                      <Route path="baseQualificationsPage" element={<QualificationsPage />} />
                  </Route>
              </Routes>
          </BrowserRouter>

          
    </div>
  );
}

export default App;
