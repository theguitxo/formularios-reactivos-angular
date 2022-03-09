import { Observable } from "rxjs";
import { StyleSelectorService } from "./services/style-selector.service";
import { IOptionValueLabel } from "./shared.intefarce";

export class SharedClass {
  isBootstrap!: Observable<boolean>;
  isMaterial!: Observable<boolean>;

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

  constructor (private readonly styleSelectorService: StyleSelectorService) {
    this.isBootstrap = this.styleSelectorService.isBootstrap;
    this.isMaterial = this.styleSelectorService.isMaterial;
  }
}
