import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { MatRadioChange } from "@angular/material/radio";
import { IOptionState, IOptionValueLabel } from "src/app/comun/shared.interface.";
import { Utils } from "src/app/comun/utils.class";
import * as listaProvincias from '../../../../assets/provincias.json';

interface IListaProvincias {
  [key: string]: string;
}

enum TiposEjemplos {
  NO_NGMODEL_REACTIVE = 0,
  NG_MODEL = 1,
  REACTIVE = 2,
}

interface IRadioButtonTipoEjemplo {
  value: TiposEjemplos;
  etiqueta: string;
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

  opcionesProvincias!: IOptionValueLabel[];
  provincia!: string;
  listaProvincias: IListaProvincias = {};
  selectorProvinciasCVA!: FormControl;

  verEjemplo: TiposEjemplos = TiposEjemplos.NG_MODEL;

  radioButtonOptions: IRadioButtonTipoEjemplo[] = [
    {
      value: TiposEjemplos.NO_NGMODEL_REACTIVE,
      etiqueta: 'Sin ngModel ni Reactive Forms'
    },
    {
      value: TiposEjemplos.NG_MODEL,
      etiqueta: 'Con ngModel'
    },
    {
      value: TiposEjemplos.REACTIVE,
      etiqueta: 'Con Reactive Forms'
    }
  ];
  radioButtonOptionSelected!: string;

  isNoNgModelReactive = false;
  isNgModel = false;
  isReactive = false;

  constructor(
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.opcionesProvincias = Utils.getJSONDefault(listaProvincias).map((item: IOptionState
      ) => {
      this.listaProvincias[item.code] = item.state;
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

  handleSelectorProvinciaCambia(event: string): void {
    this.provincia = event;
  }

  handleChangeRadioButton(event: MatRadioChange): void {
    this.isNoNgModelReactive = false;
    this.isNgModel = false;
    this.isReactive = false;

    if (event.value === TiposEjemplos.NO_NGMODEL_REACTIVE) {
      this.provincia = '';
      this.isNoNgModelReactive = true;
    } else if (event.value === TiposEjemplos.NG_MODEL) {
      this.provincia = '43';
      this.isNgModel = true;
    } else if (event.value === TiposEjemplos.REACTIVE) {
      this.buildSelectorProvinciasCVA();
      this.isReactive = true;
    }
  }

  buildSelectorProvinciasCVA(): void {
    this.selectorProvinciasCVA = this.fb.control({
      value: '43',
      disabled: false,
    });
  }
}
