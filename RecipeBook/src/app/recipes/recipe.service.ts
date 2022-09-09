import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(private slService: ShoppingListService) {

  }

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Fruit Salad',
      'This is content1',
      'https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Winter-Fruit-Salad-Recipe.jpg', [new Ingredient('Pear', 3), new Ingredient('Apple', 5), new Ingredient('Pomogrante', 1)]
    ),
    new Recipe(
      'Ice Creams',
      'This is content2',
      'https://thumbs.dreamstime.com/b/neapolitan-ice-cream-15779155.jpg', [new Ingredient('Chocolate', 1), new Ingredient('Vanilla', 1), new Ingredient('Strawberry', 1)]
    ),
    new Recipe(
      'Chicken Roll',
      'This is content3',
      'https://uploads-ssl.webflow.com/5c481361c604e53624138c2f/60f2ea67b471327a1d82959b_chicken%20roll_1500%20x%201200.jpg', [new Ingredient('Chicken', 1), new Ingredient('Vegetables', 5)]
    ),
    new Recipe(
      'Cakes',
      'This is content4',
      'https://t4.ftcdn.net/jpg/02/09/10/27/360_F_209102761_kZuhHqFsVf4mCmPdH4t2udPl1Pj5mWNM.jpg', [new Ingredient('Chocolate', 2), new Ingredient('Strawberry', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
