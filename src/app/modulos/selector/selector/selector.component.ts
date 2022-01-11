import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { IOpcionValorEtiqueta } from "src/app/comun/comun.interface";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  opciones: IOpcionValorEtiqueta[] = [
    {
      etiqueta: 'Opción 1',
      valor: 'valor1'
    },
    {
      etiqueta: 'Opción 2',
      valor: 'valor2'
    },
    {
      etiqueta: 'Opción 3',
      valor: 'valor3'
    }
  ];

  selectorCVA!: FormControl;

  constructor(
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildSelectorCVA();
  }

  buildSelectorCVA(): void {
    this.selectorCVA = this.fb.control({
      value: null,
      disabled: false
    }, Validators.required);
  }

  setValue(valor: string): void {
    this.selectorCVA.setValue(valor);
  }
}
