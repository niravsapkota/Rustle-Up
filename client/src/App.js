import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Search from "./components/Search";
import SignUp from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Profile from "./components/Profile/Profile";
import ProfileMyRecipe from "./components/Profile/ProfileMyRecipe";
import ManageProfile from "./components/Profile/ManageProfile";
import Recipe from "./components/Recipe/Recipe";
import { CreateRecipe, EditRecipe } from "./components/CreateRecipe";
import Trending from "./components/Trending/Trending";
import ErrorPage from "./components/ErrorPage";
import Tips from "./components/Tips";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const App = () => {
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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile-my-recipe" element={<ProfileMyRecipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/manage-profile" element={<ManageProfile />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/create-recipe/:id" element={<EditRecipe />}></Route>
          <Route path="/tips" element={<Tips />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
