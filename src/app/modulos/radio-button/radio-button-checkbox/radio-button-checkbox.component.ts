import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { IOptionValueLabel } from "src/app/comun/shared.interface.";

@Component({
  selector: 'app-radio-button-checkbox',
  templateUrl: './radio-button-checkbox.component.html',
  styleUrls: ['./radio-button-checkbox.component.scss']
})
export class RadioButtonCheckboxComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();

  valores: IOptionValueLabel[] = [
    {
      label: 'valor 1',
      value: 'valor1'
    },
    {
      label: 'valor 2',
      value: 'valor2'
    },
    {
      label: 'valor 3',
      value: 'valor3'
    }
  ];

  inputRadioRequerido!: FormControl;

  inputRadioCVA!: FormControl;
  inputRadioCVASeleccionado!: string;

  constructor(
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.buildInputRadioRequerido();
    this.buildInputRadioCVA();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  buildInputRadioRequerido(): void {
    this.inputRadioRequerido = this.fb.control({
      value: null,
      disabled: false
    }, Validators.required);
  }

  buildInputRadioCVA(): void {
    this.inputRadioCVA = this.fb.control({
      value: '',
      disabled: false
    });

    this.subscription.add(
      this.inputRadioCVA.valueChanges.subscribe(
        (valor: string) => this.inputRadioCVASeleccionado = valor
      )
    );
  }

  enableRadio(): void {
    this.inputRadioCVA.enable();
  }

  disableRadio(): void {
    this.inputRadioCVA.disable();
  }
}
