import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className="recipe-title">{title}</h1>
      <div className="ingredients-container">
        <ol className="ingredients">
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
