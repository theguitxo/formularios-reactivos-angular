import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { MatRadioChange } from "@angular/material/radio";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { IOptionState, IOptionValueLabel } from "src/app/shared/shared.intefarce";
import { Utils } from "src/app/shared/utils.class";
import * as statesList from '../../../../assets/states.json';

interface IStatesList {
  [key: string]: string;
}

enum ExamplesTypes {
  NO_NGMODEL_REACTIVE = 0,
  NG_MODEL = 1,
  REACTIVE = 2,
}

interface IRadioButtonExampleType {
  value: ExamplesTypes;
  label: string;
}
@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  opciones: IOptionValueLabel[] = [
    {
      label: 'Opción 1',
      value: 'valor1'
    },
    {
      label: 'Opción 2',
      value: 'valor2'
    },
    {
      label: 'Opción 3',
      value: 'valor3'
    }
  ];
  selectorCVA!: FormControl;

  statesOptions!: IOptionValueLabel[];
  state!: string;
  statesList: IStatesList = {};
  statesSelectorCVA!: FormControl;

  radioButtonOptions: IRadioButtonExampleType[] = [
    {
      value: ExamplesTypes.NO_NGMODEL_REACTIVE,
      label: 'Sin ngModel ni Reactive Forms'
    },
    {
      value: ExamplesTypes.NG_MODEL,
      label: 'Con ngModel'
    },
    {
      value: ExamplesTypes.REACTIVE,
      label: 'Con Reactive Forms'
    }
  ];
  radioButtonOptionSelected!: string;

  isNoNgModelReactive = false;
  isNgModel = false;
  isReactive = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly styleSelectorService: StyleSelectorService
  ) {}

  ngOnInit(): void {
    this.statesOptions = Utils.getJSONDefault(statesList).map((item: IOptionState) => {
      this.statesList[item.code] = item.state;
      return {
        value: item.code,
        label: item.state
      }
    });
    this.buildSelectorCVA();
  }

  buildSelectorCVA(): void {
    this.selectorCVA = this.fb.control({
      value: null,
      disabled: false
    }, Validators.required);
  }

  setValue(valor: string): void {
    this.selectorCVA.setValue(valor);
  }

  handleStateSelectorChanges(event: string): void {
    this.state = event;
  }

  handleChangeRadioButton(event: MatRadioChange): void {
    this.isNoNgModelReactive = false;
    this.isNgModel = false;
    this.isReactive = false;

    if (event.value === ExamplesTypes.NO_NGMODEL_REACTIVE) {
      this.state = '';
      this.isNoNgModelReactive = true;
    } else if (event.value === ExamplesTypes.NG_MODEL) {
      this.state = '43';
      this.isNgModel = true;
    } else if (event.value === ExamplesTypes.REACTIVE) {
      this.buildStatesSelectorCVA();
      this.isReactive = true;
    }
  }

  buildStatesSelectorCVA(): void {
    this.statesSelectorCVA = this.fb.control({
      value: '43',
      disabled: false,
    });
  }
}
