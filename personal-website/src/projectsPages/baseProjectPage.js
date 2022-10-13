// JavaScript source code

/**
 * This page is to display the projects I have been working on so far.
 * */

import '../cssFiles/projectsPage.css';

function baseProjectPage() {

    return (

        <div id = "projectsPageContainer">
            <h2 id = "projectsPageTitle">Projects</h2>
            <div id="inPageshortCuts">
                <ul> <p id="shortCutsTitle">Shortcuts</p>
                    <li className="shortCut"><a href="#proj_1">Portfolio Website</a></li>
                    <li className="shortCut"><a href="#proj_2">Frostbite Website</a></li>
                </ul>
            </div>

            <div id="projectsContainer">
                <div id="proj_1">
                    <h3 className="projectTitle"> Personal Website</h3>
                    <p className="roleInProject"><b>Project Role:</b> Developer, UI/UX designer, Product owner</p>
                    <p className="shortSummary"><b>Project Summary:</b> A fairly basic website made using the REACT framework</p>
                    <p className="repoLink"><b>Link:</b><a href="https://github.com/Thelangostudent/Personal-Website/tree/Develop"> GitHub repo</a></p>
                </div>

                <div id="proj_2">
                    <h3 className="projectTitle"> Frostbite Website</h3>
                    <p className="roleInProject"><b>Project Role:</b> SCRUM masterm, project lead, assistive programmer</p>
                    <p className="shortSummary"><b>Project Summary:</b> A bachelors project we made for a band named Frostbite</p>
                    <p className="repoLink"><b>Link:</b><a href="https://github.com/Thelangostudent/Frostbite-Website"> GitHub repo</a> </p>
                </div>


            </div>





        </div>

    );



}

export default baseProjectPage;
