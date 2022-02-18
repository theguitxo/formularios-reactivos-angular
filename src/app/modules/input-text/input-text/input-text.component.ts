import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent {}
