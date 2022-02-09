import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, INJECTOR, Injector, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { IOptionValueLabel } from "src/app/comun/shared.interface.";

@Component({
  selector: 'app-cva-radio-button',
  templateUrl: './cva-radio-button.component.html',
  styleUrls: ['./cva-radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CVARadioButtonComponent
    }
  ]
})
export class CVARadioButtonComponent implements ControlValueAccessor, OnInit {
  _control!: NgControl;

  @Input() nombreRadio!: string;
  @Input() opciones!: IOptionValueLabel[];

  private onTouched!: Function;
  private onChanged!: Function;

  selected!: string;

  constructor(
    @Inject(INJECTOR) private injector: Injector,
    private readonly cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._control = this.injector.get(NgControl);
    this._control.statusChanges?.subscribe(() => this.cd.markForCheck());
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

  handleRadioButtonChange(event: any): void {
    this.selected = event.target.value;
    this.onTouched();
    this.onChanged(this.selected);
  }
}
