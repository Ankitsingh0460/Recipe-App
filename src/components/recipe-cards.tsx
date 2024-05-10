import { useEffect, useState } from "react";
import { Card } from "./card";
import axios from "axios";

interface Recipe {
  id: number;
  image: string;
  title: string;
  summary: string;
}

export const RecipeCards = () => {
  const [randomRecipes, setRandomRecipes] = useState<Recipe[]>([]);
  const [error, seterror] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("randomRecipes");
        if (cachedData) {
          setRandomRecipes(JSON.parse(cachedData));
        } else {
          const res = await axios.get(
            `https://api.spoonacular.com/recipes/random?number=12&apiKey=62fe675592e44bdab1980848ce82a590`
          );
          const data = res.data.recipes;
          setRandomRecipes(data);

          localStorage.setItem("randomRecipes", JSON.stringify(data));
        }
      } catch (error) {
        console.log(error);
        seterror(true);
      }
    };

    fetchData();
  }, []);

  const LoadNewRecipes = async () => {
    try {
      localStorage.removeItem("randomRecipes");
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/random?number=12&apiKey=62fe675592e44bdab1980848ce82a590`
      );
      const data = res.data.recipes;
      setRandomRecipes(data);
      localStorage.setItem("randomRecipes", JSON.stringify(data));
    } catch (error) {
      console.log(error);
      seterror(true);
    }
  };

  console.log(randomRecipes);

  if (error) {
    return (
      <p className="text-lg text-red-500 font-bold">
        Some internal error occured please try again later
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 max-w-7xl mx-auto mt-10 gap-y-5 mb-10">
      {randomRecipes &&
        randomRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            title={recipe.title}
            summary={recipe.summary}
          />
        ))}
      <p
        className="underline cursor-pointer hover:text-blue-500"
        onClick={LoadNewRecipes}
      >
        Load new
      </p>
    </div>
  );
};
