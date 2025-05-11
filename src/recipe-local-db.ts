import * as idb from "idb";
import { Recipe } from "./recipe.type";

const DATABASE_KEY = "local-db";
const RECIPE_DATABASE_KEY = "recipes";

export class IndexedDbConnection {
  static recipeDatabaseConnection: idb.IDBPDatabase<unknown>;

  static async initialize() {
    if (!this.recipeDatabaseConnection) {
      this.recipeDatabaseConnection = await idb.openDB(DATABASE_KEY, 1, {
        upgrade(db) {
          db.createObjectStore(RECIPE_DATABASE_KEY, { keyPath: "id" });
        },
      });
    }

    return this.recipeDatabaseConnection;
  }

  static getInstance() {
    if (!this.recipeDatabaseConnection) {
      return IndexedDbConnection.initialize();
    }
    return this.recipeDatabaseConnection;
  }
}

export const getRecipeById = async (id: string) => {
  const db = await IndexedDbConnection.getInstance();
  return db.get(RECIPE_DATABASE_KEY, id);
};

export const getAllRecipes = async (): Promise<Recipe[]> => {
  const db = await IndexedDbConnection.getInstance();
  return db.getAll(RECIPE_DATABASE_KEY);
};

export const addRecipe = async (recipe: Recipe) => {
  console.log("Adding recipe to IndexedDB:", recipe);
  const db = await IndexedDbConnection.getInstance();
  return db.put(RECIPE_DATABASE_KEY, recipe);
};

export const deleteRecipe = async (id: string) => {
  const db = await IndexedDbConnection.getInstance();
  return db.delete(RECIPE_DATABASE_KEY, id);
};
