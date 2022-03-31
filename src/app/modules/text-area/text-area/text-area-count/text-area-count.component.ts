import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StyleSelectorService } from 'src/app/shared/services/style-selector.service';
import { SharedClass } from 'src/app/shared/shared.class';

/**
 * Componente para mostrar un textarea con un contador de caracteres
 *
 * ```
 * <app-text-area-count></app-text-area-count>
 * ```
 */
@Component({
  selector: 'app-text-area-count',
  templateUrl: './text-area-count.component.html',
  styles: [`
    .text-area-count {
      height: 10rem;
      resize: none;
    }

    mat-hint {
      &[align='end'] {
        justify-content: flex-end;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TextAreaCountComponent extends SharedClass implements OnInit {
  textAreaCountControl!: FormControl;
  changeValueSubscription!: Subscription;
  labelTextArea = 'Introduzca un texto';
  counterText!: string;

  constructor(
    private readonly fb: FormBuilder,
    styleSelectorService: StyleSelectorService
  ) {
    super(styleSelectorService);
  }

  ngOnInit(): void {
    this.buildTextAreaCountControl();
  }

  buildTextAreaCountControl(): void {
    this.textAreaCountControl = this.fb.control({
      value: '',
      disabled: false
    });

    this.updateCounterText(this.textAreaCountControl.value);

    this.changeValueSubscription =
      this.textAreaCountControl.valueChanges
        .subscribe((value: string) => this.updateCounterText(value));
  }

  private updateCounterText(value: string): void {
    this.counterText = `Total caracteres: ${value.length}`;
  }
}
