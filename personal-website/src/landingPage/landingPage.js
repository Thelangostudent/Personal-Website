// JavaScript source code

// consider changing newscontent into individual cards instead.

/***
 * This js file is the main landing page.
 * Here will news about me and the site be.
 * */

import '../cssFiles/landingPage.css';

function landingPage() {
    return (
        <div id = "landingPageContainer">
        <h2 id="pageHeader">Main Page</h2>
        
            <div id="inPageshortCuts">
                <p id="shortCutsTitle">Shortcuts</p>
                <ul> 
                    <li className="shortCut"><a href="#news_1">Site finally launched!</a></li>


                </ul> 
            </div>

            <div id="newsContent">
                <div id="news_1">
                    <h3 className="newsHeadline"> First Version Finally launched!</h3>
                    <p className="newsContent">The website has now launched in its initial form.
                        I know it is rough right now, so feedback at this stage is appreciated.
                        On this site you will find information about me and my projects and any relevant news.
                        if you wish to contact me, check the about section. <br></br>
                        I know the CSS is rough right now, but it will improve with time as it develops. </p>
                </div>


            </div>

        </div>
        
    );


}

export default landingPage;
