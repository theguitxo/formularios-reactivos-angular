import { Component, OnDestroy, OnInit } from '@angular/core';
import { Utils } from './shared/utils.class';
import * as linksList from '../assets/links.json';
import { ILink } from './shared/shared.intefarce';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs/operators'
import { Observable, of, Subscription } from 'rxjs';

/**
 * Component principal de la aplicación
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  /**
   * Lista de rutas a mostrar
   */
  links!: ILink[];

  routerSubs!: Subscription;
  showTabs!: Observable<boolean>;

  constructor(
    private readonly router: Router
  ) {}

  /**
   * OnInit: carga la lista de rutas a mostrar
   */
  ngOnInit(): void {
    this.links = Utils.getJSONDefault(linksList).sort((a: ILink, b: ILink) => {
      return a.order < b.order ? -1 : 1;
    });

    this.routerSubs = this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe((event: Event) => {
        this.showTabs = of((event as NavigationEnd).urlAfterRedirects !== '/home');
      });
  }

  ngOnDestroy(): void {
    this.routerSubs.unsubscribe();
  }
}
