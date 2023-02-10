import { heroModel } from './../../models/heromodel';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {
  @Output() heroAdded = new EventEmitter<heroModel>();
  name: string = '';
  age: number | null = null;
  gender =  'Male'
  constructor() { }

  ngOnInit() {
  }
  onAddNewHero(){
    const hero:heroModel = {
      heroName : this.name,
      heroAge : this.age,
      heroGender : this.gender
    }
    this.heroAdded.emit(hero);
    // this.herosList.push({
    //   heroName: this.name,
    //   heroAge: this.age,
    //   heroGender: this.gender
    //  })
    // this.name = '';
    // this.age = 0;
  }
}
