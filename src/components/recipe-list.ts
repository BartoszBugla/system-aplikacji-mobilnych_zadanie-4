import { getAllMeals } from "../meal-api";
import { getAllRecipes } from "../recipe-local-db";
import { Recipe } from "../recipe.type";

import { StatefulComponent } from "./stateful-componen";

export interface RecipeListState {
  recipes: Recipe[];
  isLoading: boolean;
  error: string | null;
}

export class RecipeList extends StatefulComponent<RecipeListState> {
  constructor() {
    super({
      recipes: [],
      isLoading: false,
      error: null,
    });

    this.loadRecipes();
    this.listenForSearch();
  }

  async listenForSearch() {
    const searchInput = document.querySelector("#search") as HTMLInputElement;

    let debounceTimeout: NodeJS.Timeout;

    searchInput.addEventListener("input", (event) => {
      if (debounceTimeout) clearTimeout(debounceTimeout);

      debounceTimeout = setTimeout(() => {
        const searchValue = (event.target as HTMLInputElement).value.trim();
        this.loadRecipes(searchValue);
      }, 500);
    });
  }

  async loadRecipes(search: string = "") {
    this.setState({
      error: null,
      isLoading: true,
    });

    try {
      const meals = await getAllMeals(search);
      const indexedDbREsponse = await getAllRecipes();

      const mergedData = [
        ...meals.map((m) => {
          return {
            ...m,
            id: m.idMeal,
          };
        }),
        ...(indexedDbREsponse || []),
      ]
        .filter((recipe) =>
          recipe?.strMeal?.toLowerCase().includes(search?.toLowerCase())
        )
        .sort((a, b) => a?.strMeal?.localeCompare(b?.strMeal));

      this.setState({
        recipes: mergedData || [],
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error: error.message,
        isLoading: false,
      });
    }
  }

  render() {
    const element = document.querySelector("#recipe-list");

    const newChildren = this.getState().recipes.map((recipe) => {
      const recipeElement = document.createElement("div");
      recipeElement.className = "recipe";
      recipeElement.innerHTML = `
       <a href="/__BASE_URL__/details?id=${recipe.id}">
        <h2>${recipe.strMeal}</h2>
        <img class="recipe-preview-icon" src="${
          recipe.strMealThumb || "landscape-placeholder.svg"
        }" alt="${recipe.strMeal}" />
        <p>Kategoria: ${recipe.strCategory}</p>
        <p>Pochodzenie: ${recipe.strArea}</p>
       </a>
      `;
      return recipeElement;
    });

    element.replaceChildren(...newChildren);
  }
}
