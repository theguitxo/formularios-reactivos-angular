import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedClass } from "src/app/shared/shared.class";
import { ErrorMatcher } from "src/app/shared/utils.class";

@Component({
  selector: 'app-input-text-valid-pattern',
  templateUrl: './input-text-valid-pattern.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextValidPatternComponent extends SharedClass implements OnInit {

  inputTextPattern!: FormControl;
  inputTextPatternMatcher!: ErrorStateMatcher;

  labelInput = 'Input de texto con comprobación de patrón';
  errorMessage = 'El texto debe cumplir el patrón XXXXX-XXX';

  constructor(
    private readonly fb: FormBuilder,
    styleSelectorService: StyleSelectorService
  ) {
    super(styleSelectorService);
  }

  ngOnInit(): void {
    this.buildInputTextPattern();
  }

  buildInputTextPattern(): void {
    this.inputTextPattern = this.fb.control({
      value: '',
      disabled: false,
    }, Validators.pattern(/[a-zA-Z]{5}-[a-zA-Z]{3}$/));

    this.inputTextPatternMatcher = new ErrorMatcher();
  }
}
