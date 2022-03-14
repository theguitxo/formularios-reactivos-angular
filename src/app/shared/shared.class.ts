import { Observable } from "rxjs";
import { StyleSelectorService } from "./services/style-selector.service";
import { IOptionValueLabel } from "./shared.intefarce";

export abstract class SharedClass {
  isBootstrap!: Observable<boolean>;
  isMaterial!: Observable<boolean>;

  requiredMessage = 'El valor es obligatorio';

  selectorOptions: IOptionValueLabel[] = [
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

  constructor (protected readonly styleSelectorService: StyleSelectorService) {
    this.isBootstrap = this.styleSelectorService.isBootstrap;
    this.isMaterial = this.styleSelectorService.isMaterial;
  }
}
