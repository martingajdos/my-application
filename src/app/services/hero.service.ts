import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Hero[] {
    return HEROES;
  }

  getHeroesAsync(): Observable<Hero[]> {
    const heroes = of(HEROES);
    // send a message using MessageService
    this.messageService.add('HeroService: Fetched heroes...');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
