import { Component, EventEmitter, forwardRef, OnInit, Output } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ILangIcon } from "src/app/shared/shared.intefarce";

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LangSelectorComponent),
      multi: true
    }
  ]
})
export class LangSelectorComponent implements ControlValueAccessor, OnInit {
  @Output() languageChange: EventEmitter<ILangIcon> = new EventEmitter();

  private onTouched!: Function;
  private onChanged!: Function;

  langs!: ILangIcon[];

  ngOnInit(): void {
    this.langs = [
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
    this.selectLanguage(value);
  }

  handleClickLanguage(lang: string): void {
    this.selectLanguage(lang);
    this.onTouched();
    this.onChanged(lang);
  }

  selectLanguage(lang: string): void {
    this.langs.forEach(i => i.selected = false);
    const item = this.langs.find(i => i.lang === lang);
    if (item) {
      item.selected = true;
      this.languageChange.emit(item);
    }
  }
}
