import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-cva-input-text-example',
  templateUrl: './cva-input-text-example.component.html'
})
export class CVAInputTextExampleComponent implements OnInit {

  inputTextCVA!: FormControl;

  constructor(
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildInputTextCVA();
  }

  buildInputTextCVA(): void {
    this.inputTextCVA = this.fb.control({
      value: '',
      disabled: false
    }, Validators.required);
  }

  randomCode(): void {
    const keys: string [] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    this.inputTextCVA.setValue(new Array(16).fill('').map((item) => keys[Math.floor(Math.random() * keys.length)]).join(''));
  }

  disableControl(): void {
    this.inputTextCVA.disable();
  }

  enableControl(): void {
    this.inputTextCVA.enable();
  }
}
