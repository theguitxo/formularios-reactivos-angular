import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-input-text-valid-pattern',
  templateUrl: './input-text-valid-pattern.component.html'
})
export class InputTextValidPatternComponent implements OnInit {

  inputTextPattern!: FormControl;

  constructor(
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildInputTextPattern();
  }

  buildInputTextPattern(): void {
    this.inputTextPattern = this.fb.control({
      value: '',
      disabled: false,
    }, Validators.pattern(/[a-zA-Z]{5,5}-[a-zA-Z]{3,3}$/));
  }
}
