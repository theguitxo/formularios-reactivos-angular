import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";

@Component({
  selector: 'app-input-text-required',
  templateUrl: './input-text-required.component.html'
})
export class InputTextRequiredComponent implements OnInit {
  inputTextRequired!: FormControl;

  constructor(
    private readonly fb: FormBuilder,
    private readonly style: StyleSelectorService
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
