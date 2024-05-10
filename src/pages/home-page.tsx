import { NavigationBar } from "../components/navigation-bar";
import { RecipeCards } from "../components/recipe-cards";

export const HomePage = () => {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <RecipeCards />
    </div>
  );
};
