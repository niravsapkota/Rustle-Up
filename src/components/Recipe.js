import React from "react";
import pic from "../assets/unsplash_8T9AVksyt7s.png";
import recipe_profile from "./recipe-profile.js";

export default function recipe() {
    return(
        <>
        <div className="app__recipe">

            <div className="app__recipeProfile">
                <recipe_profile
                    img={pic}
                    title="Title"/>
            </div>

            <div className="app__recipedetails">
                <button className="app__printButton">Print</button>
                
                <div className="app__ingredients">
                    <h2>Ingredients</h2>
                    <ol>
                        <li>Ingredient A</li>
                        <li>Ingredient B</li>
                        <li>Ingredient C</li>
                        <li>Ingredient D</li>
                    </ol>
                </div>
            
                <div className="app__utensilsreq">
                    <h2>Utensils</h2>
                    <ol>
                        <li>Utensil A</li>
                        <li>Utensil B</li>
                        <li>Utensil C</li>
                        <li>Utensil d</li>
                    </ol>
                </div>
            
                <div className="app__procedure">
                    <h2>Procedure</h2>               
                    <ol>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a rhoncus nunc,
                             et dapibus ligula. Phasellus posuere placerat odio, quis aliquet nisi. Aliquam vehicula,
                              augue sed interdum mattis, orci lacus aliquam ligula, a fermentum quam orci nec diam.</li>      
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a rhoncus nunc,
                             et dapibus ligula. Phasellus posuere placerat odio, quis aliquet nisi. Aliquam vehicula,
                              augue sed interdum mattis, orci lacus aliquam ligula, a fermentum quam orci nec diam. 
                              Curabitur commodo felis ac quam euismod, eu euismod dolor scelerisque. 
                              Phasellus turpis lacus, venenatis sed ex ac, vulputate vestibulum ex.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a rhoncus nunc,
                             et dapibus ligula. Phasellus posuere placerat odio, quis aliquet nisi. Aliquam vehicula,
                              augue sed interdum mattis, orci lacus aliquam ligula, a fermentum quam orci nec diam.</li>      
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a rhoncus nunc,
                             et dapibus ligula. Phasellus posuere placerat odio, quis aliquet nisi. Aliquam vehicula,
                              augue sed interdum mattis, orci lacus aliquam ligula, a fermentum quam orci nec diam. 
                              Curabitur commodo felis ac quam euismod, eu euismod dolor scelerisque. 
                              Phasellus turpis lacus, venenatis sed ex ac, vulputate vestibulum ex.</li>
                    </ol>
                </div>
            
            </div>
        </div>
        </>
    );
}