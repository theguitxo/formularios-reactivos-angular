import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Observable } from "rxjs";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { ErrorMatcher } from "src/app/shared/utils.class";

@Component({
  selector: 'app-input-text-email',
  templateUrl: './input-text-email.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextEmailComponent implements OnInit {

  inputTextEmail!: FormControl;
  inputTextEmailMatcher!: ErrorStateMatcher;

  isBootstrap!: Observable<boolean>;
  isMaterial!: Observable<boolean>;

  labelInput = 'Input de texto formato de e-mail válido';
  emailFormatMessage = 'Se requiere un formato de e-mail válido';

  constructor(
    private readonly fb: FormBuilder,
    private readonly styleSelectorService: StyleSelectorService
  ) {}

  ngOnInit(): void {
    this.isBootstrap = this.styleSelectorService.isBootstrap;
    this.isMaterial = this.styleSelectorService.isMaterial;

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
