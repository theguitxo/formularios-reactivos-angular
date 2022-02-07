import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-input-text-required',
  templateUrl: './input-text-required.component.html'
})
export class InputTextRequiredComponent implements OnInit {

  inputTextRequired!: FormControl;

  constructor(
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildInputTextRequired();
  }

  buildInputTextRequired(): void {
    this.inputTextRequired = this.fb.control({
      value: '',
      disabled: false
    }, Validators.required);
  }
}
