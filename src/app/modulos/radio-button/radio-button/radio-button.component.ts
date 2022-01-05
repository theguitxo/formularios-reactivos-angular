import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
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
