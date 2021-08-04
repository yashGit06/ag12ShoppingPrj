import { Component, OnInit } from '@angular/core';
import { Recpie } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recpie[] = [
    new Recpie('Momo', 'Chow Chow with Mayo', 'https://img.etimg.com/photo/msid-70813567,quality-100/momos-1.jpg'),
    new Recpie('Roll', 'Chow Chow with Mayo', 'http://spicyworld.in/recipeimages/bhuna-chicken-roll-add.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
