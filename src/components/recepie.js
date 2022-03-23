import React from "react";
import pic from "../assets/unsplash_8T9AVksyt7s.png";

export default function recepie() {
    return(
        <>
        <div className="app__recepie">

            <div className="app__recepieProfile">
                <recepie-profile
                    img={pic}
                    title="Title"/>
            </div>

            <div className="app__recepiedetails">
                
                <div className="app__ingredients">
                    <ol>
                        <li>Ingredient A</li>
                        <li>Ingredient B</li>
                        <li>Ingredient C</li>
                        <li>Ingredient D</li>
                    </ol>
                </div>
            
                <div className="app__utensilsreq">
                    <ol>
                        <li>Utensil A</li>
                        <li>Utensil B</li>
                        <li>Utensil C</li>
                        <li>Utensil d</li>
                    </ol>
                </div>
            
                <div className="app__procedure">

                </div>
            
            </div>
        </div>
        </>
    );
}