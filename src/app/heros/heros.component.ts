import { heroModel } from './../models/heromodel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
 name: string = '';
 age: number | null = null;
 showText: boolean = false;
 herosList: heroModel[] = []
 gender =  'Male'
  constructor() { }

  ngOnInit(): void {

  }

  giveMeName(){
    return this.name;
  }

  onAddNewHero(){
    //return this.showText = true;
    this.herosList.push({
      heroName: this.name,
      heroAge: this.age,
      heroGender: this.gender
     })
  }
  getAgeColor(hero:any){
    if (hero.heroAge >= 50){
      return 'yellow';
    }
    else {
      return 'green';
    }
  }
}
