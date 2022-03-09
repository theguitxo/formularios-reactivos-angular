import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedClass } from "src/app/shared/shared.class";

@Component({
  selector: 'app-required-selector',
  templateUrl: './required-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequiredSelectorComponent extends SharedClass implements OnInit {
  constructor(
    private readonly fb: FormBuilder,
    styleSelectorService: StyleSelectorService
  ) {
    super(styleSelectorService);
  }
  ngOnInit(): void {

  }
}
