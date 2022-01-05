import { Component, OnInit } from '@angular/core';
import * as listaEnlaces from '../assets/enlaces.json';
import { Utils } from './comun/utils.class';
interface IEnlace {
  orden: number;
  ruta: string;
  titulo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  enlaces!: IEnlace[];

  ngOnInit(): void {
    this.enlaces = Utils.getJSONDefault(listaEnlaces).sort((a: IEnlace, b: IEnlace) => {
      return a.orden < b.orden ? -1 : 1;
    });
  }
}
