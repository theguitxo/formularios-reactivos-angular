import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedClass } from "src/app/shared/shared.class";
import { ErrorMatcher } from "src/app/shared/utils.class";

@Component({
  selector: 'app-input-text-email',
  templateUrl: './input-text-email.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextEmailComponent extends SharedClass implements OnInit {
  inputTextEmail!: FormControl;
  inputTextEmailMatcher!: ErrorStateMatcher;

  labelInput = 'Input de texto formato de e-mail válido';
  emailFormatMessage = 'Se requiere un formato de e-mail válido';

  constructor(
    private readonly fb: FormBuilder,
    styleSelectorService: StyleSelectorService
  ) {
    super(styleSelectorService);
  }

  ngOnInit(): void {
    this.buildInputTextEmail();
  }

  buildInputTextEmail(): void {
    this.inputTextEmail = this.fb.control({
      value: '',
      disabled: false,
    }, Validators.email);

    this.inputTextEmailMatcher = new ErrorMatcher();
  }
}
