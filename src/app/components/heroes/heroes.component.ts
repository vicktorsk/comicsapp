import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];

  constructor(
    private _heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    //console.table(this.heroes);
  }
  
  verHeroe(index:number){
    this.router.navigate(['/heroe', index]);
  }

}

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
}
