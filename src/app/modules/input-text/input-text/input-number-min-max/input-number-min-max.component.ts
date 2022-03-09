import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { StyleSelectorService } from 'src/app/shared/services/style-selector.service';
import { SharedClass } from 'src/app/shared/shared.class';
import { ErrorMatcher } from 'src/app/shared/utils.class';

@Component({
  selector: 'app-input-number-min-max',
  templateUrl: './input-number-min-max.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputNumberMinMaxComponent extends SharedClass implements OnInit, OnDestroy {
  inputNumberMinMax!: FormControl;
  inputNumberMinMaxMatcher!: ErrorStateMatcher;

  labelInput = 'Input numérico con comprobación de mínimo y máximo';

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
    this.buildInputNumberMinMax();
  }

  ngOnDestroy(): void {
    this.valueChangeSub.unsubscribe();
  }

  buildInputNumberMinMax(): void {
    this.inputNumberMinMax = this.fb.control({
      value: null,
      disabled: false,
    }, [
      Validators.min(5),
      Validators.max(15)
    ]);

    this.inputNumberMinMaxMatcher = new ErrorMatcher();

    this.valueChangeSub = this.inputNumberMinMax.valueChanges.subscribe(() => {
      this.errorNoMin = `El mínimo es ${this.inputNumberMinMax?.errors?.min?.min } (el valor actual es ${this.inputNumberMinMax?.errors?.min?.actual })`;
      this.errorNoMax = `El máximo es ${this.inputNumberMinMax?.errors?.max?.max } (el valor actual es ${this.inputNumberMinMax?.errors?.max?.actual })`;
    });
  }
}
