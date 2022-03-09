import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Subscription } from "rxjs";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedClass } from "src/app/shared/shared.class";
import { ErrorMatcher } from "src/app/shared/utils.class";

@Component({
  selector: 'app-input-text-min-max-length',
  templateUrl: './input-text-min-max-length.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextMinMaxLengthComponent extends SharedClass implements OnInit {

  inputTextMinMaxLength!: FormControl;
  inputTextMinMaxLengthMatcher!: ErrorStateMatcher;

  labelInput = 'Input de texto con mínimo y máximo de largo de cadena';

  errorNoMin!: string;
  errorNoMax!: string;

  valueChangeSub!: Subscription;

  constructor(
    private readonly fb: FormBuilder,
    styleSelectorService: StyleSelectorService
  ) {
    super(styleSelectorService);
  }

  ngOnInit(): void {
    this.buildInputTextMinMaxLength();
  }

  ngOnDestroy(): void {
    this.valueChangeSub.unsubscribe();
  }

  buildInputTextMinMaxLength(): void {
    this.inputTextMinMaxLength = this.fb.control({
      value: '',
      disabled: false,
    }, [
      Validators.minLength(5),
      Validators.maxLength(10)
    ]);

    this.inputTextMinMaxLengthMatcher = new ErrorMatcher();

    this.valueChangeSub = this.inputTextMinMaxLength.valueChanges.subscribe(() => {
      this.errorNoMin = `Se requieren un mínimo de ${this.inputTextMinMaxLength?.errors?.minlength?.requiredLength} (la cadena contiene ${this.inputTextMinMaxLength?.errors?.minlength?.actualLength})`;
      this.errorNoMax = `No se pueden superar los ${this.inputTextMinMaxLength?.errors?.maxlength?.requiredLength} caracteres (la cadena contiene ${this.inputTextMinMaxLength?.errors?.maxlength?.actualLength})`;
    });
  }
}
