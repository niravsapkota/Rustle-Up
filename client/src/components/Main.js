import "./Main.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tile from "./Tile";
import axios from "axios";
import heroimga from "../assets/heroimga.png";
import heroimgb from "../assets/heroimgb.png";
import heroimgc from "../assets/heroimgc.png";
import heroimgd from "../assets/heroimgd.png";
import styled from "styled-components";

export default function Main() {
  let pics = [heroimga, heroimgb, heroimgc, heroimgd];

  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);

  const trending = async () => {
    try {
      const res = await axios.get(`/recipe/trending/`, {
        params: {
          size: 9,
        },
      });
      if (!res) {
        throw new Error("cant find the recipe");
      } else {
        const allData = res.data;
        setData(allData);
      }
    } catch (error) {
      console.log("Error Caught!");
    }
  };

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((index) => {
          if (index === pics.length - 1) {
            return 0;
          } else {
            return index + 1;
          }
        }),
      5000
    );
  }, [index]);

  useEffect(() => {
    trending();
  }, []);

  const HeroImg = styled.div`
    margin: 0;
    padding: 0;
    background-image: url("${pics[index]}");
    transition-duration: 1s;
    position: absolute;
    width: 100%;
    height: 90vh;
    background-size: 100%;
    background-repeat: no-repeat;
    z-index: 0;
    @media (max-width: 720px) {
      background-size: cover;
      height: 100vh;
    }
  `;

  return (
    <>
      <title>Rustle Up</title>

      <section className="app__section-hero">
        <HeroImg index={index}></HeroImg>
        <div className="app__hero-container">
          <div className="app__hero-line">Find the CHEF in YOU</div>
          <div className="app__hero-para">
            Experience the joy of cooking in the comfort of your own kitchen.
          </div>
          <button className="app__subscribe-btn">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/signup"
            >
              Login/Register Now
            </Link>
          </button>
        </div>
      </section>

      <section className="app__mid-section">
        <h1 className="app__mid-section-title">
          Check Out The Trending Recipes
        </h1>
        <div className="app__grid-container">
          {data.map((element) => (
            <Tile
              img={element.image_url}
              key={element.title}
              element={element}
              description={element.description}
            />
          ))}
        </div>
      </section>

      <section className="app__last-section">
        <h1 className="app_perks-title">Amazing Perks for Registered Users</h1>
        <h2>Rate the Recipes</h2>
        <h2>Leave a Review</h2>
        <h2>Add to your favourites</h2>
        <h2>Post your own recipe</h2>
        <div className="app__hightlight">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/signup"
          >
            Register Here
          </Link>
        </div>

        <h1 className="app_about-title">About Us</h1>
        <p className="app_about-us">
          Rustle Up is a website developed by Amir Bhattarai, Nirav Sapkota and
          Sankalpa Satyal. We are the students of Computer Engineering Batch
          2019 of Kathmandu University, Dhulikhel. This website is developed for
          the partial fulfillment of COMP 207 (Computer Project) of II Year/II
          Sem.
        </p>
      </section>
    </>
  );
}
