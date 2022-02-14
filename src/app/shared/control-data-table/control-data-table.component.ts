import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl } from "@angular/forms";

/**
 * Componente para motrar información de un Form Control
 */
@Component({
  selector: 'app-control-data-table',
  templateUrl: './control-data-table.component.html'
})
export class ControlDataTableComponent implements OnInit {
  /**
   * Control de formulario para mostrar sus datos
   */
  @Input() control!: AbstractControl;

  /**
   * Indicador de si el control recibido como parámetro
   * es un objeto o no
   */
  valueIsObject!: boolean;

  /**
   * Método constructor
   */
  constructor() {}

  /**
   * OnInit: comprueba si el control recibido es un objeto o no
   */
  ngOnInit(): void {
    this.valueIsObject = (typeof this.control.value === 'object');
  }
}