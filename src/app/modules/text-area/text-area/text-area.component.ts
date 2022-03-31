import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextAreaComponent {}
