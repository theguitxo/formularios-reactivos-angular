import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  // input simple sin validaciones
  inputTexto!: FormControl;

  // input simple con validación de requerido
  inputTextoRequerido!: FormControl;

  // input simple con validación de mínimo y máximo de largo
  inputTextoMinimoMaximoLargo!: FormControl;

  // input simple con validación de email válido
  inputTextoEmail!: FormControl;

  // input numérico con validación de mínimo y máximo
  inputNumericoMinimoMaximo!: FormControl;

  // input de texto con comprobación de patrón
  inputTextoPattern!: FormControl;

  // input usando un Custom Value Accessor
  inputTextoCVA!: FormControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildInputTexto();
    this.buildInputTextoRequerido();
    this.buildInputTextoMinimoMaximoLargo();
    this.buildInputTextoEmail();
    this.buildInputNumbericoMinimoMaximo();
    this.buildInputTextoPattern();
    this.buidlInputTextoCVA();
  }

  /**
   * crea el input para texto sin validaciones
   */
  buildInputTexto(): void {
    this.inputTexto = this.fb.control({
      value: '',
      disabled: false
    });
  }

  /**
   * crea el input para texto validando que sea requerido
   */
  buildInputTextoRequerido(): void {
    this.inputTextoRequerido = this.fb.control({
      value: '',
      disabled: false
    }, Validators.required);
  }

  /**
   * crea el input para texto validando un mínimo y máximo de longitud de cadena
   */
  buildInputTextoMinimoMaximoLargo(): void {
    this.inputTextoMinimoMaximoLargo = this.fb.control({
      value: '',
      disabled: false,
    }, [
      Validators.minLength(5),
      Validators.maxLength(10)
    ]);
  }

  /**
   * crea el input para texto validando una dirección de email válida
   */
  buildInputTextoEmail(): void {
    this.inputTextoEmail = this.fb.control({
      value: '',
      disabled: false,
    }, Validators.email);
  }

  /**
   * crea el input para números con validación de mínimo y máximo
   */
  buildInputNumbericoMinimoMaximo(): void {
    this.inputNumericoMinimoMaximo = this.fb.control({
      value: null,
      disabled: false,
    }, [
      Validators.min(5),
      Validators.max(15)
    ]);
  }

  /**
   * crea el input de para texto con comprobación de patrón
   */
  buildInputTextoPattern(): void {
    this.inputTextoPattern = this.fb.control({
      value: '',
      disabled: false,
    }, Validators.pattern(/[a-zA-Z]{5,5}-[a-zA-Z]{3,3}$/));
  }

  /**
   * crea el input que usa Control Value Accessor
   */
  buidlInputTextoCVA(): void {
    this.inputTextoCVA = this.fb.control({
      value: '',
      disabled: false,
    }, Validators.required);
  }

  codigoAleatorio(): void {
    const teclas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    this.inputTextoCVA.setValue(new Array(16).fill('').map((item) => teclas[Math.floor(Math.random() * teclas.length)]).join(''));
  }

  deshabilitarControl(): void {
    this.inputTextoCVA.disable();
  }

  habilitarControl(): void {
    this.inputTextoCVA.enable();
  }
}
