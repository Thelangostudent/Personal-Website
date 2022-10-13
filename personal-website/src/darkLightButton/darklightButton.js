



function darkLightButton() { 


    return (
        <div>
            <button type="button" value="dark" id="darkButton" onClick={e => darkOrLightMode(e.target.value)}>Dark</button>
            <button type="button" value="light" id="lightButton" onClick={e => darkOrLightMode(e.target.value)}>Light</button>
        
        </div >
        
        
        
        
        );


   

}




export default darkLightButton;



/**
 * Dark or light mode function.
 * Changes colour on text and background to simulate two modes of viewing.
 * 
 * @param {any} darkOrLight
 */
function darkOrLightMode(darkOrLight) {



    var textColour = document.getElementById("mainBody");

    if (darkOrLight === "dark") {

        textColour.style.color = "white";
        textColour.style.backgroundColor = "black";

    }

    if (darkOrLight === "light") {

        textColour.style.color = "black";
        textColour.style.backgroundColor = "antiquewhite";

    }


}