import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate, useParams ,useNavigate } from "react-router-dom";
import { FcEmptyTrash, FcExpand, FcFullBattery, FcFullTrash } from "react-icons/fc";

export default function recipeReview() {
    const [data, setData] = useState([])

    let { id } = useParams();

    const getReview = async () => {
    try {
    const res = await axios.get(`/recipe/get-review/${id}`, {
        headers: {
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
        },
    }
    );

    if (res) {
        const allData = res.data;
        setData(allData);
    }
    } catch (error) {
    console.log("Error Caught!");
    }

    }

    useEffect(() => {

    getReview();

    }, []);


    // const {review: review} = data;
    // document.getElementById("app__review_details").innerHTML=`<h4>${review}</h4>`
    return(
        <>               
            {/* <FcFullBattery size={35} onClick={
            () => axios.delete(`/recipe/delete-rev/${id}`).
              then(
                useNavigate("/profile-my-recipe")
              )} /> */}

        <a href="/Profile" className="app__reviewUsername">Username</a>
        <span className="app__reviewdate">yyyy-mm-dd</span>
        <div className="app__reviewContent" id="app__review_details">
            <span></span>
        </div>
               
        </>
        );
}