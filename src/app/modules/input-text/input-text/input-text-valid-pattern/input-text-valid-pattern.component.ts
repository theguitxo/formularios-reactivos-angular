import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Observable } from "rxjs";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { ErrorMatcher } from "src/app/shared/utils.class";

@Component({
  selector: 'app-input-text-valid-pattern',
  templateUrl: './input-text-valid-pattern.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextValidPatternComponent implements OnInit {

  inputTextPattern!: FormControl;
  inputTextPatternMatcher!: ErrorStateMatcher;

  isBootstrap!: Observable<boolean>;
  isMaterial!: Observable<boolean>;

  labelInput = 'Input de texto con comprobación de patrón';
  errorMessage = 'El texto debe cumplir el patrón XXXXX-XXX';

  constructor(
    private readonly fb: FormBuilder,
    private readonly styleSelectorService: StyleSelectorService
  ) {}

  ngOnInit(): void {
    this.isBootstrap = this.styleSelectorService.isBootstrap;
    this.isMaterial = this.styleSelectorService.isMaterial;

    this.buildInputTextPattern();
  }

  buildInputTextPattern(): void {
    this.inputTextPattern = this.fb.control({
      value: '',
      disabled: false,
    }, Validators.pattern(/[a-zA-Z]{5,5}-[a-zA-Z]{3,3}$/));

    this.inputTextPatternMatcher = new ErrorMatcher();
  }
}
