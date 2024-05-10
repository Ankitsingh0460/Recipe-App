import { NavigationBar } from "../components/navigation-bar";
import { RecipeDetails } from "../components/recipe-details";

export const RecipePage = () => {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <RecipeDetails />
    </div>
  );
};
