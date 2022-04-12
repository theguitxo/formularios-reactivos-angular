import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatSelectChange } from "@angular/material/select";
import { IOptionValueLabel } from "src/app/shared/shared.intefarce";

@Component({
  selector: 'app-material-selector',
  templateUrl: './material-selector.component.html',
  styleUrls: ['./material-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MaterialSelectorComponent),
      multi: true
    }
  ]
})
export class MaterialSelectorComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() options! : IOptionValueLabel[];
  @Input() value!: string;

  @Output() onChange: EventEmitter<string> = new EventEmitter();

  private onTouched!: Function;
  private onChanged!: Function;

  selected!: string;

  ngOnInit(): void {
    this.checkValueByDefault();
  }

  ngOnChanges(): void {
    this.checkValueByDefault();
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

  handleSelectionChange(event: MatSelectChange): void {
    if (this.onChanged) {
      this.onTouched();
      this.onChanged(event.value);
    } else {
      this.onChange.emit(event.value);
    }
  }

  checkValueByDefault(): void {
    if (this.value !== '') {
      this.selected = this.value;
    }
  }
}
