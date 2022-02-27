import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { IHomeCard } from '../../shared/shared.intefarce';
import * as cardList from '../../../assets/cards.json';
import { Utils } from '../../shared/utils.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  cards!: IHomeCard[];

  constructor(
    @Inject(DOCUMENT) readonly document: Document
  ) { }

  get window(): Window | null {
    return this.document.defaultView;
  }

  ngOnInit(): void {
    this.cards = Utils.getJSONDefault(cardList);
  }

  openDocumentation(): void {
    this.window?.open('./documentation/index.html', '_blank');
  }
}
