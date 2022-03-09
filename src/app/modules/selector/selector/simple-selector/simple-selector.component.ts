import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { StyleSelectorService } from 'src/app/shared/services/style-selector.service';
import { SharedClass } from 'src/app/shared/shared.class';

@Component({
  selector: 'app-simple-selector',
  templateUrl: './simple-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleSelectorComponent extends SharedClass implements OnInit {
  labelText = 'Elija una opción';

  selectorControl!: FormControl;

  constructor(
    private readonly fb: FormBuilder,
    styleSelectorService: StyleSelectorService
  ) {
    super(styleSelectorService);
  }

  ngOnInit(): void {
    this.buildSelectorControl();
  }

  buildSelectorControl(): void {
    this.selectorControl = this.fb.control({
      value: '',
      disabled: false
    });
  }
}
