import "./Main.css";
import React,{ useState , useEffect } from "react";
import { Link } from "react-router-dom";
import Tile from "./Tile";
import pic from "../assets/unsplash_8T9AVksyt7s.png";
import axios from "axios";

export default function Main() {
  
  const [data, setData] = useState([]);

  const trending = async () => {
    try {
      const res = await axios.get(`/recipe/trending/`, {
        params: {
          page: 1,
          size: 9
        }
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

  }

  useEffect(() => {

    trending();

  }, []);

  return (
    <>
      <title>Rustle Up</title>

      <section className="app__section-hero">
        <div className="app__hero-img"></div>
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
        {data.map(element => <Tile img={pic} key={element.title} element={element} description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces" />)}
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
      </section>
    </>
  );
}
