import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedClass } from "src/app/shared/shared.class";
import { ErrorMatcherNoPristine } from "src/app/shared/utils.class";

@Component({
  selector: 'app-required-selector',
  templateUrl: './required-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequiredSelectorComponent extends SharedClass implements OnInit {
  labelText = 'Elija una opción';

  requiredSelectorControl!: FormControl;
  requiredSelectorMatcher!: ErrorStateMatcher;

  constructor(
    private readonly fb: FormBuilder,
    styleSelectorService: StyleSelectorService
  ) {
    super(styleSelectorService);
  }
  ngOnInit(): void {
    this.buildRequiredSelectorControl();
  }

  buildRequiredSelectorControl(): void {
    this.requiredSelectorControl = this.fb.control({
      value: '',
      disabled: false
    }, Validators.required);

    this.requiredSelectorMatcher = new ErrorMatcherNoPristine();
  }

  resetValue(): void {
    this.requiredSelectorControl.setValue('');
  }
}
