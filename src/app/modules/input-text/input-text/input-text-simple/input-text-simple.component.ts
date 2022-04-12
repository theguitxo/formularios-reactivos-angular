import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedClass } from "src/app/shared/shared.class";

/**
 * Componente para mostrar un campo de texto sencillo
 *
 * ```
 * <app-input-text-simple></app-input-text-simple>
 * ```
 */
@Component({
  selector: 'app-input-text-simple',
  templateUrl: './input-text-simple.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextSimpleComponent extends SharedClass implements OnInit {
  inputText!: FormControl;

  labelInput = 'Input de texto';

  constructor(
    private readonly fb: FormBuilder,
    styleSelectorService: StyleSelectorService
  ) {
    super(styleSelectorService);
  }

  ngOnInit(): void {
    this.buildInputText();
  }

  buildInputText(): void {
    this.inputText = this.fb.control({
      value: '',
      disabled: false
    });
  }
}
