import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Observable } from "rxjs";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { ErrorMatcher } from "src/app/shared/utils.class";

@Component({
  selector: 'app-input-text-required',
  templateUrl: './input-text-required.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextRequiredComponent implements OnInit {
  inputTextRequired!: FormControl;
  inputTextRequiredMatcher!: ErrorStateMatcher;


  isBootstrap!: Observable<boolean>;
  isMaterial!: Observable<boolean>;

  labelInput = 'Input de texto con valor requerido';
  requiredMessage = 'El valor es obligatorio';

  constructor(
    private readonly fb: FormBuilder,
    private readonly styleSelectorService: StyleSelectorService
  ) {}

  ngOnInit(): void {
    this.isBootstrap = this.styleSelectorService.isBootstrap;
    this.isMaterial = this.styleSelectorService.isMaterial;

    this.buildInputTextRequired();
  }

  buildInputTextRequired(): void {
    this.inputTextRequired = this.fb.control({
      value: '',
      disabled: false
    }, Validators.required);

    this.inputTextRequiredMatcher = new ErrorMatcher();
  }
}
