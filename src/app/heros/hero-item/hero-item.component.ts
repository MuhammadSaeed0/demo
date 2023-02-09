import { heroModel } from './../../models/heromodel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
@Input() heroData:any
  constructor() { }

  ngOnInit() {
  }

}
