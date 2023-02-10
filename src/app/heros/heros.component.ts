import { heroModel } from './../models/heromodel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  herosList: heroModel[] = []

  constructor() { }

  ngOnInit(): void {}

  onHeroAdded(heroObj : heroModel){
    this.herosList.push(heroObj);
  }
}
