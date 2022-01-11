import { Component, forwardRef, Inject, Injector, INJECTOR, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { IOpcionValorEtiqueta } from "src/app/comun/comun.interface";

@Component({
  selector: 'app-cva-selector',
  templateUrl: './cva-selector.component.html',
  styleUrls: ['./cva-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CVASelectorComponent),
      multi: true
    }
  ]
})
export class CVASelectorComponent implements ControlValueAccessor, OnInit {
  @Input() opciones!: IOpcionValorEtiqueta[];
  @Input() valorInicial!: string;

  _control!: NgControl;

  private onTouched!: Function;
  private onChanged!: Function;

  selected!: string;

  constructor(
    @Inject(INJECTOR) private injector: Injector
  ) {}

  ngOnInit(): void {
    this._control = this.injector.get(NgControl);
    this.selected = this.valorInicial ? this.valorInicial : '';
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
