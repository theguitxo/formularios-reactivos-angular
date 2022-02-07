import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: 'app-input-text-simple',
  templateUrl: './input-text-simple.component.html'
})
export class InputTextSimpleComponent implements OnInit {
  inputText!: FormControl;

  constructor(
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildInputText();
  }

  buildInputText(): void {
    this.inputText = this.fb.control({
      value: '',
      disabled: false
    });
  }
}
