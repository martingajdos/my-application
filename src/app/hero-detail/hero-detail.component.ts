import {Component, Input, OnInit, Output} from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // Some "property" of the hero-detail component
  // use like <hero-detail [hero]=? />
  @Input() hero?: Hero;
  
  constructor() { }

  ngOnInit(): void {
  }

}
