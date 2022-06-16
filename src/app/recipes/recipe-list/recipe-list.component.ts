import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test recipe',
      'https://static.onecms.io/wp-content/uploads/sites/9/2021/12/20/sous-vide-pork-chops-FT-RECIPE1221.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
