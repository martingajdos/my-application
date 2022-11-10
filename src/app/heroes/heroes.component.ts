import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../services/hero.service";
import { MessageService } from "../services/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  // dependency injection of services
  constructor(private heroService: HeroService,
              private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroesAsync();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  getHeroesAsync(): void {
    this.heroService.getHeroesAsync().subscribe(
      heroes => this.heroes = heroes
    );
  }
}
