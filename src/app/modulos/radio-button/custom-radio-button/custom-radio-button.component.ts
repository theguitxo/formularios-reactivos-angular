import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { IValorRadioButton } from "../radio-button.interface";

@Component({
  selector: 'app-custom-radio-button',
  templateUrl: './custom-radio-button.component.html',
  styleUrls: ['./custom-radio-button.component.scss']
})
export class CustomRadioButtonComponent implements OnInit {
  @Input() valores!: IValorRadioButton[];
  @Input() formControl!: AbstractControl;

  constructor() {}

  ngOnInit(): void {}
}
