import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedClass } from "src/app/shared/shared.class";
import { ErrorMatcher } from "src/app/shared/utils.class";

@Component({
  selector: 'app-input-text-required',
  templateUrl: './input-text-required.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextRequiredComponent extends SharedClass implements OnInit {
  inputTextRequired!: FormControl;
  inputTextRequiredMatcher!: ErrorStateMatcher;

  labelInput = 'Input de texto con valor requerido';

  constructor(
    private readonly fb: FormBuilder,
    styleSelectorService: StyleSelectorService
  ) {
    super(styleSelectorService);
  }

  ngOnInit(): void {
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
