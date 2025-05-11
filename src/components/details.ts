import { getMealById } from "../meal-api";
import { getRecipeById } from "../recipe-local-db";
import { Recipe } from "../recipe.type";
import { StatefulComponent } from "./stateful-componen";

export interface DetailsState {
  recipe: Recipe | null;
  isLoading: boolean;
  error: string | null;
}

export class Details extends StatefulComponent<DetailsState> {
  constructor() {
    super({
      recipe: null,
      isLoading: false,
      error: null,
    });

    this.loadRecipe();
  }

  async loadRecipe() {
    this.setState({
      error: null,
      isLoading: true,
    });

    try {
      const recipeId = new URLSearchParams(window.location.search).get("id");
      let recipe = await getRecipeById(recipeId as string);

      if (!recipe) recipe = (await getMealById(recipeId as string))?.[0];

      if (!recipe) {
        this.setState({
          error:
            "Niestety wygląda na to że przepis nie istnieje w bazie danych lub jesteś offline i nie przepis nie został zapisany na urządzeniu.",
          isLoading: false,
        });
        return;
      }

      this.setState({
        recipe,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error: "Failed to load recipe",
        isLoading: false,
      });
    }
  }

  render() {
    const element = document.querySelector("#details") as HTMLDivElement;

    const { recipe, isLoading, error } = this.getState();

    if (isLoading) {
      return (element.innerHTML = `<div>Loading...</div>`);
    }

    if (error) {
      return (element.innerHTML = `<div>${error}</div>`);
    }

    if (!recipe) {
      return (element.innerHTML = `<div>No recipe found</div>`);
    }

    element.innerHTML = `
            <div>
                <h1>${recipe.strMeal}</h1>
                <img class="recipe-preview-icon" src="${
                  recipe.strMealThumb || "landscape-placeholder.svg"
                }" alt="${recipe.strMeal}" />
                <p>Kategoria: ${recipe.strCategory}</p>
                <p>Pochodzenie: ${recipe.strArea}</p>
                <div>Instrukcje:
                <p> ${recipe.strInstructions}</p>
                </div>
            </div>
        `;
  }
}
