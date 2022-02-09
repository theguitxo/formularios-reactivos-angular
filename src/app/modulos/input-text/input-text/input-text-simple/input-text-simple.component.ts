import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";

export enum COMPONENTS_STYLE {
  'BOOTSTRAP',
  'MATERIAL'
}

/**
 * Componente para mostrar un campo de texto sencillo
 *
 * ```
 * <app-input-text-simple></app-input-text-simple>
 * ```
 */
@Component({
  selector: 'app-input-text-simple',
  templateUrl: './input-text-simple.component.html'
})
export class InputTextSimpleComponent implements OnInit {
  optionsStyle = COMPONENTS_STYLE;
  componentsStyle: COMPONENTS_STYLE = COMPONENTS_STYLE.BOOTSTRAP;

  isBootstrap!: boolean;
  isMaterial!: boolean;

  inputTextBootstrap!: FormControl;

  constructor(
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildInputTextBootstrap();
    this.setComponentsStyle();
  }

  buildInputTextBootstrap(): void {
    this.inputTextBootstrap = this.fb.control({
      value: '',
      disabled: false
    });
  }

  changeTo(value: COMPONENTS_STYLE): void {
    this.componentsStyle = value;
    this.setComponentsStyle();
  }

  private setComponentsStyle(): void {
    this.isBootstrap = this.componentsStyle === COMPONENTS_STYLE.BOOTSTRAP;
    this.isMaterial = this.componentsStyle === COMPONENTS_STYLE.MATERIAL;
  }
}
