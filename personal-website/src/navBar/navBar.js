// JavaScript source code
/**
 This is the navbar to be present as a module in all pages.

 Author: Sander Ringmo Fylkesnes

 Last updated: see file date.
 
 */

import { Outlet, Link } from 'react-router-dom';
import '../cssFiles/navBar.css';


 function navBar() {
    return (
        <div className="navBar">
            <nav id = "naviGation">
              
                <ul id="navBarList">
                    <li className="navItem">
                        <Link to ="/"> Main Page</Link>
                    </li>
                    <li className="navItem">
                        <Link to ="/aboutPage">About</Link>
                    </li>
                    <li className="navItem">
                        <Link to ="/baseProjectPage">Projects</Link>
                    </li>
                    <li className="navItem">
                        <Link to ="/baseQualificationsPage">Qualifications</Link>
                    </li>
                    <li className="navItem">
                        <Link to ="/baseJobPage" >Jobs</Link>
                    </li>

                </ul>


            </nav>
            <Outlet/>

        </div>

      
                
        
        );


}

export default navBar;


