import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pokemonList = [
	{name: 'Bulbassaur', number: 1},
	{name: 'Charmandar', number: 4},
	{name: 'Squirtle', number: 7},
	{name: 'Pikachu', number: 25}
  ];



  constructor() { }

  ngOnInit() {
  }

}
