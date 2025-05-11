import { addRecipe } from "../recipe-local-db";
import { Recipe } from "../recipe.type";

export class AddRecipeForm {
  constructor() {
    this.listenForSubmit();
  }

  private listenForSubmit() {
    const form = document.querySelector("#recipe-form") as HTMLFormElement;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);

      const recipe: Recipe = {
        id: crypto.randomUUID(),
        strMeal: formData.get("title") as string,
        strCategory: formData.get("category") as string,
        strArea: formData.get("area") as string,
        strInstructions: formData.get("instructions") as string,
      };

      await addRecipe(recipe);

      window.location.replace("/details?id=" + recipe.id);

      form.reset();
    });
  }
}
