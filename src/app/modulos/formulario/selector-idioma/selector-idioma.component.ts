import { Component, EventEmitter, forwardRef, OnInit, Output } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ILangIcon } from "src/app/comun/shared.interface.";

@Component({
  selector: 'app-selector-idioma',
  templateUrl: './selector-idioma.component.html',
  styleUrls: ['./selector-idioma.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectorIdiomaComponent),
      multi: true
    }
  ]
})
export class SelectorIdiomaComponent implements ControlValueAccessor, OnInit {
  @Output() cambiarIdioma: EventEmitter<ILangIcon> = new EventEmitter();

  private onTouched!: Function;
  private onChanged!: Function;

  idiomas!: ILangIcon[];

  constructor () {}

  ngOnInit(): void {
    this.idiomas = [
      {
        lang: 'es',
        name: 'Español',
        selected: false
      },
      {
        lang: 'fr',
        name: 'Frances',
        selected: false
      },
      {
        lang: 'en',
        name: 'Ingles',
        selected: false
      }
    ];
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.seleccionarIdioma(value);
  }

  handleClickIdioma(idioma: string): void {
    this.seleccionarIdioma(idioma);
    this.onTouched();
    this.onChanged(idioma);
  }

  seleccionarIdioma(idioma: string): void {
    this.idiomas.map(i => i.selected = false);
    const item = this.idiomas.find(i => i.name === idioma);
    if (item) {
      item.selected = true;
      this.cambiarIdioma.emit(item);
    }
  }
}
