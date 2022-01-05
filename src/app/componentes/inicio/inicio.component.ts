import { Component, OnInit } from '@angular/core';

interface ITarjeta {
  titulo: string;
  subtitulo: string;
  texto: string;
  enlaceRuta: string;
  tituloRuta: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  tarjetas!: ITarjeta[];

  constructor() { }

  ngOnInit(): void {
    this.tarjetas = [
      {
        titulo: 'Input text',
        subtitulo: 'Campo de entrada',
        texto: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        enlaceRuta: '/input-text',
        tituloRuta: 'input-text'
      },
      {
        titulo: 'Selector',
        subtitulo: 'Lista desplegable de valores',
        texto: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        enlaceRuta: '/input-text',
        tituloRuta: 'input-text'
      }
    ]
  }

}
