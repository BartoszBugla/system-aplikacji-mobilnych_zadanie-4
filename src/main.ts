import { Details } from "./components/details";
import { AddRecipeForm } from "./components/form";
import { RecipeList } from "./components/recipe-list";

const main = () => {
  const pathname = window.location.pathname;

  if (pathname === "/__BASE_URL__//") {
    const recipeList = new RecipeList();

    recipeList.render();
  } else if (pathname.includes("/__BASE_URL__/form")) {
    new AddRecipeForm();
  } else if (pathname.includes("/__BASE_URL__/details")) {
    new Details();
  }
};

main();
