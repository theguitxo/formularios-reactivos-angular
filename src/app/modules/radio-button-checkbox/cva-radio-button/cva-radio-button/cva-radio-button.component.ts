import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, INJECTOR, Injector, Input, OnDestroy, OnInit } from "@angular/core";
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { IOptionValueLabel } from "src/app/shared/shared.intefarce";

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
export class CVARadioButtonComponent implements ControlValueAccessor, OnInit, OnDestroy {
  isBootstrap!: Observable<boolean>;
  isMaterial!: Observable<boolean>;

  _control!: NgControl;

  @Input() name!: string;
  @Input() options!: IOptionValueLabel[];

  private onTouched!: Function;
  private onChanged!: Function;

  selected!: string;
  statusChangesSubscription!: Subscription | undefined;

  labelText = 'Escoja una opción';

  constructor(
    @Inject(INJECTOR) private injector: Injector,
    private readonly cd: ChangeDetectorRef,
    private readonly styleSelectorService: StyleSelectorService
  ) {}

  ngOnInit(): void {
    this.isBootstrap = this.styleSelectorService.isBootstrap;
    this.isMaterial = this.styleSelectorService.isMaterial;

    this._control = this.injector.get(NgControl);
    this.statusChangesSubscription = this._control.statusChanges?.subscribe(() => this.cd.markForCheck());

    console.log(this._control);
  }

  ngOnDestroy(): void {
    if (this.statusChangesSubscription) {
      this.statusChangesSubscription.unsubscribe();
    }
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
    this.selected = event?.target?.value ?? event?.value;
    this.onTouched();
    this.onChanged(this.selected);
  }
}
