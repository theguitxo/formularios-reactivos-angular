import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-number-min-max',
  templateUrl: './input-number-min-max.component.html'
})
export class InputNumberMinMaxComponent implements OnInit {

  inputNumberMinMax!: FormControl;

  constructor(
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildInputNumberMinMax();
  }

  buildInputNumberMinMax(): void {
    this.inputNumberMinMax = this.fb.control({
      value: null,
      disabled: false,
    }, [
      Validators.min(5),
      Validators.max(15)
    ]);
  }
}
