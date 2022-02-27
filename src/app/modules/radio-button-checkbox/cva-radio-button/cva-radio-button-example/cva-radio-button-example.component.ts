import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { IOptionValueLabel } from "src/app/shared/shared.intefarce";

@Component({
  selector: 'app-cva-radio-button-example',
  templateUrl: './cva-radio-button-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CVARadioButtonExampleComponent implements OnInit, OnDestroy {
  isBootstrap!: Observable<boolean>;
  isMaterial!: Observable<boolean>;

  subscription: Subscription = new Subscription;

  options: IOptionValueLabel[] = [
    {
      label: 'value 1',
      value: '1'
    },
    {
      label: 'value 2',
      value: '2'
    },
    {
      label: 'value 3',
      value: '3'
    }
  ];

  radioButtonCVA!: FormControl;
  radioButtonCVASelected!: string;
  radioButtonCVASelectedString!: string;

  enableString = 'Habilitar';
  disableString = 'Deshabilitar';

  constructor(
    private readonly fb: FormBuilder,
    private readonly styleSelectorService: StyleSelectorService
  ) {}

  ngOnInit(): void {
    this.buildRadioButtonCVA();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  buildRadioButtonCVA(): void {
    this.radioButtonCVA = this.fb.control({
      value: '',
      disabled: false
    });

    this.subscription.add(
      this.radioButtonCVA.valueChanges.subscribe(
        (value: string) => {
          console.log(value);
          this.radioButtonCVASelected = value;
          this.radioButtonCVASelectedString = `Valor Seleccionado: ${this.radioButtonCVASelected}`;
        }
      )
    );
  }

  enableRadio(): void {
    this.radioButtonCVA.enable();
  }

  disableRadio(): void {
    this.radioButtonCVA.disable();
  }
}
