import { Component, OnInit } from '@angular/core';
import { Utils } from './shared/utils.class';
import * as linksList from '../assets/links.json';
import { ILink } from './shared/shared.inteface';

/**
 * Component principal de la aplicación
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /**
   * Lista de rutas a mostrar
   */
  links!: ILink[];

  constructor() {}

  /**
   * OnInit: carga la lista de rutas a mostrar
   */
  ngOnInit(): void {
    this.links = Utils.getJSONDefault(linksList).sort((a: ILink, b: ILink) => {
      return a.order < b.order ? -1 : 1;
    });
  }
}
