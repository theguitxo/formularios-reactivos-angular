import { Component } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-cva-radio-button',
  templateUrl: './cva-radio-button.component.html',
  styleUrls: ['./cva-radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CVARadioButtonComponent
    }
  ]
})
export class CVARadioButtonComponent implements ControlValueAccessor {
  registerOnChange(fn: any): void {

  }

  registerOnTouched(fn: any): void {

  }

  writeValue(obj: any): void {

  }

}
