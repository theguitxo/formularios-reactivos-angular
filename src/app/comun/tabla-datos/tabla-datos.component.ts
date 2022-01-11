import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.scss']
})
export class TablaDatosComponent implements OnInit {
  @Input() control!: AbstractControl;

  valueIsString!: boolean;
  constructor() {}

  ngOnInit(): void {
    this.valueIsString = (typeof this.control.value === 'string');
  }
}
