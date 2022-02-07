import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-input-text-email',
  templateUrl: './input-text-email.component.html'
})
export class InputTextEmailComponent implements OnInit {

  inputTextEmail!: FormControl;

  constructor(
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildInputTextEmail();
  }

  buildInputTextEmail(): void {
    this.inputTextEmail = this.fb.control({
      value: '',
      disabled: false,
    }, Validators.email);
  }
}
