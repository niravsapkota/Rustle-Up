import React from "react";

export default function recipeReview(){
    return(
        <>
            <a href="/Profile" className="app__reviewUsername">Username</a>
            <span className="app__reviewdate">yyyy-mm-dd</span>
            <span className="app__reviewRating">4/5</span>
            <div className="app__reviewContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                rhoncus nunc, et dapibus ligula. Phasellus posuere placerat
                odio, quis aliquet nisi. Aliquam vehicula, augue sed interdum
                mattis, orci lacus aliquam ligula, a fermentum quam orci nec
                diam.</div>
        </>
        );
}