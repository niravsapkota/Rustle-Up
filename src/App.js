import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Search from "./components/Search";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfileMyRecipe from "./components/ProfileMyRecipe";
import Recipe from "./components/Recipe";
import CreateRecipe from "./components/CreateRecipe";
import Trending from "./components/Trending";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const icon =
    theme === "light" ? <MdLightMode size={30} /> : <MdDarkMode size={30} />;

  return (
    <div className="theme" data-theme={theme}>
      <Router>
        <NavBar />
        <div onClick={switchTheme} className="theme-toggle">
          {icon}
        </div>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-my-recipe" element={<ProfileMyRecipe />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
