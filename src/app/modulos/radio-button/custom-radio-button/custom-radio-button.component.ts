import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { IOpcionValorEtiqueta } from "src/app/comun/comun.interface";

@Component({
  selector: 'app-custom-radio-button',
  templateUrl: './custom-radio-button.component.html',
  styleUrls: ['./custom-radio-button.component.scss']
})
export class CustomRadioButtonComponent implements OnInit {
  @Input() valores!: IOpcionValorEtiqueta[];
  @Input() valorInicial!: IOpcionValorEtiqueta;
  @Input() control!: FormControl;

  constructor() {}

  ngOnInit(): void {
    if (this.valorInicial) {
      this.control.setValue(this.valorInicial.valor);
    }
  }
}
