import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: 'app-radio-button-checkbox',
  templateUrl: './radio-button-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonCheckboxComponent {
  constructor() {}
}
