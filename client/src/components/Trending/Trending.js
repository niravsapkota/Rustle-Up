import React, { useState, useEffect } from "react";
import TrendingTile from "./TrendingTile";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Trending() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchParams, setSearchparams] = useSearchParams();
  const size = searchParams.get("size");
  const page = searchParams.get('page');


  const trending = async () => {
    try {
      const res = await axios.get(`/recipe/trending/`, {
        params: {
          page: page,
          size: size,
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
    trending();
  }, [searchParams]);

  return (
    <>
      <p className="app__trending-title">Trending</p>

      <div className="app__trending-container">
        {data.map((element) => (
          <TrendingTile key={element.title} element={element} />
        ))}
         
        <p className="app__trending-next" onClick={
          ()=>{
            setSearchparams({'page':`${parseInt(page)+1}`,'size':`${parseInt(size)}`})
          }
        }>Next</p>
      
      </div>
    </>
  );
}
