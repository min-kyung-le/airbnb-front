import { Component } from '@angular/core';
import { People } from '../people';

import { HeroesService } from './heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  providers: [HeroesService],
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  people: People = {
    firstName: '',
    lastName: '',
  };

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes().subscribe((people) => {
      this.people.firstName = people.firstName;
      this.people.lastName = people.lastName;
    });
    console.log('되는 거니? ', this.people);
  }
}
