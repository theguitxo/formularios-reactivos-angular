import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { IOpcionValorEtiqueta } from "src/app/comun/comun.interface";

@Component({
  selector: 'app-radio-button-checkbox',
  templateUrl: './radio-button-checkbox.component.html',
  styleUrls: ['./radio-button-checkbox.component.scss']
})
export class RadioButtonCheckboxComponent implements OnInit {

  valores: IOpcionValorEtiqueta[] = [
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

  inputRadioRequerido!: FormControl;

  constructor(
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.buildInputRadioRequerido();
  }

  buildInputRadioRequerido(): void {
    this.inputRadioRequerido = this.fb.control({
      value: null,
      disabled: false
    }, Validators.required);
  }
}
