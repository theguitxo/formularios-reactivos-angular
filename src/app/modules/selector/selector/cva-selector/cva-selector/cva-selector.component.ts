import { Component, forwardRef, Inject, Injector, INJECTOR, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { IOptionValueLabel } from "src/app/shared/shared.intefarce";
import { ErrorMatcherNoPristine } from "src/app/shared/utils.class";

@Component({
  selector: 'app-cva-selector',
  templateUrl: './cva-selector.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CVASelectorComponent),
      multi: true
    }
  ]
})
export class CVASelectorComponent implements ControlValueAccessor, OnInit {
  @Input() isBootstrap!: boolean | null;
  @Input() isMaterial!: boolean | null;
  @Input() selectorOptions!: IOptionValueLabel[];
  @Input() requiredMessage!: string;

  private onTouched!: Function;
  private onChanged!: Function;

  cvaSelectorControl!: FormControl;
  cvaSelectorControlMatcher!: ErrorStateMatcher;

  labelText = 'Elija una opción';

  disabled!: boolean;

  constructor(
    @Inject(INJECTOR) private injector: Injector
  ) {}

  ngOnInit(): void {
    this.cvaSelectorControl = <FormControl>(this.injector.get(NgControl)?.control);
    this.cvaSelectorControlMatcher = new ErrorMatcherNoPristine();
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    console.log(value);
  }

  setDisabledState(value: boolean): void {
    this.disabled = value;
  }
}
