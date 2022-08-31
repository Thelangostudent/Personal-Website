// JavaScript source code

/**
 * This page is to display my qualifications (mainly formal education).
 * 
 * */

import '../cssFiles/baseQualificationsPage.css';

function baseQualificationsPage() {

    return (

        <div id="qualificationsPageContainer">
            <h2 id="qualificationsPageTitle">Qualifications</h2>
            <div id="inPageshortCuts">
                <ul> <p id="shortCutsTitle">Shortcuts</p>
                    <li className="shortCut"><a href="#qual_1">Computer Engineering</a></li>
                    <li className="shortCut"><a href="#qual_2">Computer Electrician</a></li>

                </ul>
            </div>

            <div id="qualificationsContainer">
                <div id="qual_1">
                    <h3 className="qualificationTitle">Computer Engineer</h3>
                    <p><b>Courses (not all):</b> <br></br>
                     Object oriented programming, System development, Web development, sustainable engineering, Mobile applications, Game development (Unity)                    </p>

                </div>

                <div id="qual_2">
                    <h3 className="qualificationTitle">Computer Electrician</h3>
                    <p>Trade certificate as a computer electrician</p>

                </div>

            </div>

        </div>


    );

}

export default baseQualificationsPage;
