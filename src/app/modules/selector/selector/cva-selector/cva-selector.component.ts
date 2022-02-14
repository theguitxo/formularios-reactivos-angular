import { Component, forwardRef, Inject, Injector, INJECTOR, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { IOptionValueLabel } from "src/app/shared/shared.inteface";

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
  @Input() options!: IOptionValueLabel[];
  @Input() initialValue!: string;

  _control!: NgControl;

  private onTouched!: Function;
  private onChanged!: Function;

  selected!: string;

  constructor(
    @Inject(INJECTOR) private injector: Injector
  ) {}

  ngOnInit(): void {
    this._control = this.injector.get(NgControl);
    this.selected = this.initialValue ? this.initialValue : '';
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.selected = value;
  }

  handleSelectorChange(event: any): void {
    this.onTouched();
    this.selected = event.target.value;
    this.onChanged(event.target.value);
  }
}