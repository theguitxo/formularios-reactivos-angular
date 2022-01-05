import { Component, OnInit } from "@angular/core";
import { IValorRadioButton } from "../radio-button.interface";

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  valores: IValorRadioButton[] = [
    {
      etiqueta: 'valor 1',
      valor: 'valor1'
    },
    {
      etiqueta: 'valor 2',
      valor: 'valor2'
    },
    {
      etiqueta: 'valor 3',
      valor: 'valor3'
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }
}
