// JavaScript source code

/**
 * This page displays the jobs I have had so far.
 * 
 * */

// Consider making shortcuts into card as it is a repeating element.

import '../cssFiles/baseJobsPage.css';


function baseJobPage() {

    return (
        
        <div id="jobPageContainer">
            <h2 id="jobsPageTitle"> My Jobs</h2>
            <div id="inPageshortCuts">
                <ul> <p id="shortCutsTitle">Shortcuts</p>
                    <li className="shortCut"><a href="#job_1">Open to work</a></li>
                </ul>
            </div>

            <div id="jobsContainer">
                <div id="job_1">
                    <h3 className="jobTitle">Open to work</h3>
                    <p>I have entered the job market after studying. Feel free to contact if you find what I do interesting </p>

                </div>

            </div>


        </div>
        
    );


}

export default baseJobPage;
