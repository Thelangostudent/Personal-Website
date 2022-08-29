// JavaScript source code

/**
 * This is the about page.
 * Here will be contact info, image and a summary about me.
 * Due to the static nature of the content, there will be no need for dynamic cards
 * 
 * @author Sander Ringmo Fylkesnes
 * 
 * 
 * */

import profilePicture from '../assets/images/Profilbilete.jpg';


function aboutPage() {
    return (

        <div id= "aboutPageContainer">
            <h2 id="aboutPageTitle"> About Me </h2>
            <div id="contactInfo">
                <ul>Contact info
                    <li><b>Phone Number:</b> +47 978 30 520</li>
                    <li><b>Email:</b> sander.ringmo@hotmail.no</li>
                    <li><b>Alternate Email</b> sander.ringmo@gmail.com</li>
                    <li><b>Linked In</b> <a href="https://www.linkedin.com/in/sander-ringmo-fylkesnes-1561441b0/">My profile</a></li>
                </ul>
            </div>

            <div id="imageContainer">
                <img src={profilePicture} alt="image of me"></img>

            </div>

            <div id="summaryContainer">
                <h3>Summary of me</h3>
                <p>I have recently graduated Computer engineering at NTNU Ålesund. I have had an interest in IT for quite some time (since at least vocational school) and now have more professional qualifications. <br></br>
                  I can work both as a computer engineer (programming, system development...etc) and as a Computer electrician, whichever is needed of me. When something is new to me, I am always willing to learn.</p>
            </div>


        </div>
        
        
    );


}

export default aboutPage;