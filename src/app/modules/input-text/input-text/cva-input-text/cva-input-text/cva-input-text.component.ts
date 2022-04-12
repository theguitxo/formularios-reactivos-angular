import { Component, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-cva-input-text',
  templateUrl: './cva-input-text.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CVAInputTextComponent),
      multi: true
    }
  ]
})
export class CVAInputTextComponent implements ControlValueAccessor {
  disabled = false;
  codigo = '';

  private onTouched!: Function;
  private onChanged!: Function;

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.codigo = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleClickButton(data: string): void {
    if (data === 'DEL') {
      this.codigo = this.codigo.substring(0, this.codigo.length - 1);
    } else if (data === 'OK') {
      this.onTouched();
      this.onChanged(this.codigo);
    } else {
      this.codigo += data;
    }
  }
}
