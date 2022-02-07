import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-input-text-min-max-length',
  templateUrl: './input-text-min-max-length.component.html'
})
export class InputTextMinMaxLengthComponent implements OnInit {

  inputTextMinMaxLength!: FormControl;

  constructor(
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildInputTextMinMaxLength();
  }

  buildInputTextMinMaxLength(): void {
    this.inputTextMinMaxLength = this.fb.control({
      value: '',
      disabled: false,
    }, [
      Validators.minLength(5),
      Validators.maxLength(10)
    ]);
  }

}
