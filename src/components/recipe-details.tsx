import { FaCheck } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";
import { FaHandPointRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const RecipeDetails = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [recipeDetail, setRecipeDetail] = useState<any>();
  const [error, seterror] = useState(false);

  useEffect(() => {
    const getRecipeData = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/informationBulk?apiKey=62fe675592e44bdab1980848ce82a590&ids=${id}`
        );
        const data = await res.data;
        setRecipeDetail(data[0]);
      } catch (error) {
        console.log(error);
        seterror(true);
      }
    };
    getRecipeData();
  }, [id]);

  console.log(recipeDetail);

  if (error) {
    return (
      <p className="text-lg text-red-500 font-bold">
        Some internal error occured please try again later
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-16 mb-10 bg-gray-100 p-4 rounded-lg pb-10">
      <div className=" flex flex-col lg:flex-row justify-between gap-x-40  mt-10">
        <div className="min-w-96 h-96">
          <img src={recipeDetail?.image} className="rounded-xl w-96 h-96" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{recipeDetail?.title}</h1>
          <p
            className="text-lg text-gray-700"
            dangerouslySetInnerHTML={{ __html: recipeDetail?.summary }}
          />
          <div className="flex flex-col lg:flex-row items-center gap-x-10">
            <p className="flex items-center gap-x-3 text-gray-700 font-bold text-lg">
              Vegetarian:{" "}
              <span>
                {recipeDetail?.vegetarian ? (
                  <FaCheck className="h-5 w-5 text-green-500" />
                ) : (
                  <TiCancel className="h-5 w-5 text-red-500" />
                )}
              </span>
            </p>
            <p className="flex items-center gap-x-3 text-gray-700 font-bold text-lg">
              Dairy Free:{" "}
              <span>
                {recipeDetail?.dairyFree ? (
                  <FaCheck className="h-5 w-5 text-green-500" />
                ) : (
                  <TiCancel className="h-5 w-5 text-red-500" />
                )}
              </span>
            </p>
            <p className="flex items-center gap-x-3 text-gray-700 font-bold text-lg">
              Very Healthy:{" "}
              <span>
                {recipeDetail?.veryHealthy ? (
                  <FaCheck className="h-5 w-5 text-green-500" />
                ) : (
                  <TiCancel className="h-5 w-5 text-red-500" />
                )}
              </span>
            </p>
            <p className="flex items-center gap-x-3 text-gray-700 font-bold text-lg">
              Gluten Free:{" "}
              <span>
                {recipeDetail?.glutenFree ? (
                  <FaCheck className="h-5 w-5 text-green-500" />
                ) : (
                  <TiCancel className="h-5 w-5 text-red-500" />
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold text-gray-700">Ingredients :</h1>
        <div className="flex flex-col gap-2 mt-5">
          {recipeDetail &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            recipeDetail.extendedIngredients.map((ingredient: any) => (
              <div className="flex items-center gap-5">
                <FaHandPointRight className="h-5 w-5 text-[#A34343]" />
                <p className="text-lg font-semibold">{ingredient.original}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-gray-700">Instructions :</h1>
        <p
          className="text-lg text-gray-700"
          dangerouslySetInnerHTML={{ __html: recipeDetail?.instructions }}
        />
      </div>
    </div>
  );
};
