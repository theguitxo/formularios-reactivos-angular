import { Component, EventEmitter, forwardRef, OnInit, Output } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { IIconoIdioma } from "src/app/comun/comun.interface";

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
  @Output() cambiarIdioma: EventEmitter<IIconoIdioma> = new EventEmitter();

  private onTouched!: Function;
  private onChanged!: Function;

  idiomas!: IIconoIdioma[];

  constructor () {}

  ngOnInit(): void {
    this.idiomas = [
      {
        idioma: 'es',
        nombre: 'Español',
        seleccionado: false
      },
      {
        idioma: 'fr',
        nombre: 'Frances',
        seleccionado: false
      },
      {
        idioma: 'en',
        nombre: 'Ingles',
        seleccionado: false
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
    this.idiomas.map(i => i.seleccionado = false);
    const item = this.idiomas.find(i => i.idioma === idioma);
    if (item) {
      item.seleccionado = true;
      this.cambiarIdioma.emit(item);
    }
  }
}
