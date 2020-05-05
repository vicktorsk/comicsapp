import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../heroes/heroes.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})

export class BusquedaComponent implements OnInit {
  
  heroes:Heroe[] = [];
  termino: string;

  constructor(
    private activateRoute : ActivatedRoute,
    private _heroeService : HeroesService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( params => {
      this.termino = params['termino']; 
      this.heroes = this._heroeService.buscarHeroes(params['termino']);
      console.log(this.heroes);
      
    })
  }

}
