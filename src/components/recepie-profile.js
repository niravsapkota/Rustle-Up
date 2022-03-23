import React from "react";

export default function recepieProfile(props){

    return(
    <div  className="app__recepie-profile">
        <img className='app__webview-show' src={props.img} alt='none'/>
        <h4 className="image-title">{props.title}</h4>
        <p className="app__prepTime">Preparation Time : N hrs</p>
        <p className="app__difficultyRaing">Difficulty : 3/5</p>
        <p className="app__recepieRating">Rating : 4/5</p>
        <button className="ratingButton">Give a Rating</button>
        <button className="reviewButton">Leave a Review</button>
    </div>
    )
}