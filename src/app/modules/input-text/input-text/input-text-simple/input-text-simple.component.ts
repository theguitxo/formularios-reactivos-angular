import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";

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
export class InputTextSimpleComponent implements OnInit {
  inputText!: FormControl;

  isBootstrap!: Observable<boolean>;
  isMaterial!: Observable<boolean>;

  labelInput = 'Input de texto';

  constructor(
    private readonly fb: FormBuilder,
    private readonly styleSelectorService: StyleSelectorService
  ) {}

  ngOnInit(): void {
    this.isBootstrap = this.styleSelectorService.isBootstrap;
    this.isMaterial = this.styleSelectorService.isMaterial;

    this.buildInputText();
  }

  buildInputText(): void {
    this.inputText = this.fb.control({
      value: '',
      disabled: false
    });
  }
}
