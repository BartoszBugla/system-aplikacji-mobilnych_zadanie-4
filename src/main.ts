import { Details } from "./components/details";
import { AddRecipeForm } from "./components/form";
import { RecipeList } from "./components/recipe-list";

const main = () => {
  const pathname = window.location.pathname;

  if (pathname === "/") {
    const recipeList = new RecipeList();

    recipeList.render();
  } else if (pathname.includes("/form")) {
    new AddRecipeForm();
  } else if (pathname.includes("/details")) {
    new Details();
  }
};

main();
