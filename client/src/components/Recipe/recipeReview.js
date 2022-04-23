import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate, useParams ,useNavigate } from "react-router-dom";
import { FcEmptyTrash} from "react-icons/fc";

export default function recipeReview(props) {
    // const [Details, setDetails] = useState([])
    // let {id} = useParams();

    // const getReview = async () => {
    //     try {
    //         const res = await axios.get(`/recipe/get-review/${id}`, {
    //             headers: {
    //             "Access-Control-Allow-Credentials": true,
    //             "Content-Type": "application/json",
    //             },
    //         });
    //             if (res) {
    //                 const allDetails = res.Details;
    //                 setDetails(allDetails);
    //             }
    //     } catch (error) {
    //         console.log("Error Caught!");
    //     }
    // }

    // useEffect(() => {
    //   getReview();
    // },[]);


    // const {review: review} = data;
    /* document.getElementById("app__review_details").innerHTML=
        `   Username
            <span className="app__reviewdate">{Details.created_at}</span> 
            <FcEmptyTrash size={35} onClick={
                () => axios.delete(`/recipe/delete-rev/${id}`).
              then(
                useNavigate("/profile-my-recipe")
            )} /> 

            <div className="app__reviewContent" id="app__review_details">
            {Details.review} 
        </div>`*/
        const {reviews : reviews} = props;
        
        reviews.forEach(element => {
            document.getElementById("app__review_details").innerHTML += `<li>${element}</li><hr></hr>`
        });
    
    return(
        <div id="app__review_details">               
            <ul>
                
            </ul>
        </div>
        );
}