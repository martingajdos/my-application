import { Injectable } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";
import { Observable, of } from "rxjs";
import { MessageService } from './message.service';

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
}
