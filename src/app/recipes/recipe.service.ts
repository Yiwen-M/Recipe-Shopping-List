import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Butter Milk Fried Chicken',
  //     'Super-crunchy fried chicken!',
  //     'https://loveincorporated.blob.core.windows.net/contentimages/gallery/352faeb5-95f6-41e6-af4c-24ac02b46511-fried-chicken.jpg',
  //     [
  //       new Ingredient('Chicken Thigh', 6),
  //       new Ingredient('Flour', 1),
  //       new Ingredient('Buttermilk', 1),
  //       new Ingredient('Egg', 2),
  //     ]
  //   ),
  //   new Recipe(
  //     'Cinnamon Roll',
  //     'Fluffy roll with cinnamon filling, buttery enough to satisfy your deepest cravings!',
  //     'https://a.cdn-hotels.com/gdcs/production87/d1511/bb6fc275-5cbf-40b4-9096-21730304c6a5.jpg?impolicy=fcrop&w=800&h=533&q=medium.jpg',
  //     [
  //       new Ingredient('Flour', 1),
  //       new Ingredient('Cinnamon', 1),
  //       new Ingredient('Sugar', 1),
  //       new Ingredient('Butter', 1),
  //       new Ingredient('Egg', 2),
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
