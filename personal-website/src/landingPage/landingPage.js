// JavaScript source code

// consider changing newscontent into individual cards instead.

/***
 * This js file is the main landing page.
 * Here will news about me and the site be.
 * */

function landingPage() {
    return (
        <div id = "landingPageContainer">
        <h2 id="pageHeader">Main Page</h2>
        
        <div id="inPageshortCuts">
                <ul> Shortcuts
                    <li className="shortCut"></li>


                </ul> 
            </div>

            <div id="newsContent">
                <div id="news_1">
                    <h3 className="newsHeadline"> First Version Finally launched!</h3>
                    <p className="newsContent">The website has now launched in its initial form.
                        I know it is rough right now, so feedback at this stage is appreciated.
                        On this site you will find information about me and my projects and any relevant news.
                        if you wish to contact me, check the about section.</p>
                </div>


            </div>

        </div>
        
    );


}

export default landingPage;
