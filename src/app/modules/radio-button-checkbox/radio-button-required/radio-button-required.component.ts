import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedClass } from "src/app/shared/shared.class";
import { IOptionValueLabel } from "src/app/shared/shared.intefarce";

@Component({
  selector: 'app-radio-button-required',
  templateUrl: './radio-button-required.component.html',
  styleUrls: ['./radio-button-required.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonRequiredComponent extends SharedClass implements OnInit {
  inputRadioRequired!: FormControl;

  labelText = 'Se ha de escoger alguna opción';

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
    styleSelectorService: StyleSelectorService
  ) {
    super(styleSelectorService);
  }

  ngOnInit(): void {
    this.buildInputRadioRequired();
  }

  buildInputRadioRequired(): void {
    this.inputRadioRequired = this.fb.control({
      value: '',
      disabled: false
    }, Validators.required);
  }
}
