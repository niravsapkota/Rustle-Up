import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { TextField } from "@material-ui/core";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import TrendingTile from "./Trending/TrendingTile";

export default function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchparams] = useSearchParams();
  const searchQuery = searchParams.get("searchQuery");
  const navigate = useNavigate();
  const searchPost = () => {
    if (search.trim()) {
      (async function getRecipeBySearch() {
        try {
          const res = await axios.get(`/recipe/search/`, {
            params: {
              searchQuery: search,
            },
          });
          if (!res) {
            throw new Error("cant find the recipe");
          } else {
            const allData = res.data;
            console.log(allData.data);
            setData(allData);
          }
        } catch (error) {
          console.log("Error Caught!");
        }
      })();
      navigate(`/search?searchQuery=${search}`);
    }
  };

  return (
    <>
      <div className="app__search-bar">
        <TextField
          id="app__search-input"
          htmlFor="search"
          name="search"
          variant="outlined"
          placeholder="Search for Recipe"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <GoSearch
          style={{
            cursor: "pointer",
            color: "var(--primary-color)",
            marginLeft: "0.5vw",
            paddingTop: ".5vw",
          }}
          size={40}
          onClick={searchPost}
        />
        <div className="app__trending-container">
          {data.map((element) => (
            <TrendingTile key={element.title} element={element} />
          ))}
        </div>
      </div>
    </>
  );
}
