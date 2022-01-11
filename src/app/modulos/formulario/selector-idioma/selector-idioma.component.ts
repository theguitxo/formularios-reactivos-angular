import { Component, forwardRef, OnInit } from "@angular/core";
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

  writeValue(obj: any): void {}

  handleClickIdioma(idioma: string): void {
    this.idiomas.map(i => i.seleccionado = false);
    const item = this.idiomas.find(i => i.idioma === idioma);
    if (item) {
      item.seleccionado = true;
    }
    this.onTouched();
    this.onChanged(idioma);
  }
}
