import React from "react";

export default function RecipeProfile(props) {

  const [logged, setLogged] = useState(false);

  //Logged boolean.
  const callProfile = async () => {
    const res = await axios.get("/profile", {
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
      },
    });
    if (res) {
      const value = res.data;
      setInfo(value);
      setLogged(true);
    } else {
      setLogged(false);
    }
  };

  useEffect(() => {
    setInterval(() => {
      callProfile();
    }, 1000);
  }, []);

  return (
    <div className="app__recipe_profile">
      <img className="app__recipeImg" src={props.img} alt="none" />
      <span className="app__profile-user-card-name">{props.title}</span>
      <p className="app__recipe_profile-details">
        Difficulty: {props.difficulty}
      </p>
      <p className="app__recipe_profile-details">
        Preparation time: {props.prep_time}
      </p>
      <p className="app__profile-user-card-options">
        {logged? (<btn>Add to Favourites</btn>):(<></>)}
      </p>
    </div>
  );
}
