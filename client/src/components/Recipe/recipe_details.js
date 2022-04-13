import React,{useState} from "react";
import axios from "axios";

export default function RecipeDetails() {

  const [data,setData] = useState({});
  async function showNext(){

    try{
      const config = {
        method:'GET',
        url:'/recipe/get',
      }
      const res = await axios(config);
      console.log(res.data);
      
    }
    catch(error){
      console.log(error);
    }

  }

  return (
    <>
      <div className="app__ingredients">
        <h2>Ingredients</h2>
        <ol>
          <li>Ingredient A</li>
          <li>Ingredient B</li>
          <li>Ingredient C</li>
          <li>Ingredient D</li>
        </ol>
      </div>

      <div className="app__utensilsreq">
        <h2>Utensils</h2>
        <ol>
          <li>Utensil A</li>
          <li>Utensil B</li>
          <li>Utensil C</li>
          <li>Utensil d</li>
        </ol>
      </div>

      <div className="app__procedure">
        <h2>Procedure</h2>
        <ol>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            rhoncus nunc, et dapibus ligula. Phasellus posuere placerat odio,
            quis aliquet nisi. Aliquam vehicula, augue sed interdum mattis, orci
            lacus aliquam ligula, a fermentum quam orci nec diam.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            rhoncus nunc, et dapibus ligula. Phasellus posuere placerat odio,
            quis aliquet nisi. Aliquam vehicula, augue sed interdum mattis, orci
            lacus aliquam ligula, a fermentum quam orci nec diam. Curabitur
            commodo felis ac quam euismod, eu euismod dolor scelerisque.
            Phasellus turpis lacus, venenatis sed ex ac, vulputate vestibulum
            ex.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            rhoncus nunc, et dapibus ligula. Phasellus posuere placerat odio,
            quis aliquet nisi. Aliquam vehicula, augue sed interdum mattis, orci
            lacus aliquam ligula, a fermentum quam orci nec diam.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            rhoncus nunc, et dapibus ligula. Phasellus posuere placerat odio,
            quis aliquet nisi. Aliquam vehicula, augue sed interdum mattis, orci
            lacus aliquam ligula, a fermentum quam orci nec diam. Curabitur
            commodo felis ac quam euismod, eu euismod dolor scelerisque.
            Phasellus turpis lacus, venenatis sed ex ac, vulputate vestibulum
            ex.
          </li>
        </ol>
      </div>
      <input type="submit" name="next" value="Next>>>>>>>>>>>>>" onClick={showNext}/>
    </>
  );
}
