import { Details } from "./components/details";
import { AddRecipeForm } from "./components/form";
import { RecipeList } from "./components/recipe-list";

const main = () => {
  const pathname = window.location.pathname;

  console.log("Pathname", pathname);
  if (pathname === "/system-aplikacji-mobilnych_zadanie-4/") {
    const recipeList = new RecipeList();

    recipeList.render();
  } else if (pathname.includes("/system-aplikacji-mobilnych_zadanie-4/form")) {
    new AddRecipeForm();
  } else if (
    pathname.includes("/system-aplikacji-mobilnych_zadanie-4/details")
  ) {
    new Details();
  }
};

main();
