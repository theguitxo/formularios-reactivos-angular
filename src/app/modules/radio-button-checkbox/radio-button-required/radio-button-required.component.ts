import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { IOptionValueLabel } from "src/app/shared/shared.intefarce";

@Component({
  selector: 'app-radio-button-required',
  templateUrl: './radio-button-required.component.html',
  styleUrls: ['./radio-button-required.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonRequiredComponent implements OnInit {
  isBootstrap!: Observable<boolean>;
  isMaterial!: Observable<boolean>;

  inputRadioRequired!: FormControl;

  labelText = 'Se ha de escoger alguna opción';
  requiredMessage = 'El valor es requerido. Se ha de escoger un valor.';

  options: IOptionValueLabel[] = [
    {
      label: 'valor 1',
      value: 'value1'
    },
    {
      label: 'valor 2',
      value: 'value2'
    },
    {
      label: 'valor 3',
      value: 'value3'
    }
  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly styleSelectorService: StyleSelectorService
  ) {}

  ngOnInit(): void {
    this.isBootstrap = this.styleSelectorService.isBootstrap;
    this.isMaterial = this.styleSelectorService.isMaterial;

    this.buildInputRadioRequired();
  }

  buildInputRadioRequired(): void {
    this.inputRadioRequired = this.fb.control({
      value: '',
      disabled: false
    }, Validators.required);
  }
}
