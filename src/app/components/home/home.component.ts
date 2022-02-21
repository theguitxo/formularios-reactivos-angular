import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

/**
 * Información de la tarjeta con información
 * de la sección a navegar
 */
interface ICard {
  /**
   * Titulo de la tarjeta
   */
  title: string;
  /**
   * Subtitulo de la tarjeta
   */
  subtitle: string;
  /**
   * Texto de la tarjeta
   */
  text: string;
  /**
   * Link de la ruta a navegar
   */
  linkRoute: string;
  /**
   * Titulo de la ruta a navegar
   */
  titleRoute: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  cards!: ICard[];

  constructor(
    @Inject(DOCUMENT) readonly document: Document
  ) { }

  get window(): Window | null {
    return this.document.defaultView;
  }

  ngOnInit(): void {
    this.cards = [
      {
        title: 'Input text',
        subtitle: 'Campo de entrada',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        linkRoute: '/input-text',
        titleRoute: 'input-text'
      },
      {
        title: 'Selector',
        subtitle: 'Lista desplegable de valores',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        linkRoute: '/input-text',
        titleRoute: 'input-text'
      }
    ]
  }

  openDocumentation(): void {
    this.window?.open('./documentation/index.html', '_blank');
  }
}
