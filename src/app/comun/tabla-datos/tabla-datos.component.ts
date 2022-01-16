import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.scss']
})
export class TablaDatosComponent implements OnInit {
  @Input() control!: AbstractControl;

  valueIsObject!: boolean;
  constructor() {}

  ngOnInit(): void {
    this.valueIsObject = (typeof this.control.value === 'object');
  }
}
