import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedClass } from "src/app/shared/shared.class";

@Component({
  selector: 'app-cva-selector-example',
  templateUrl: './cva-selector-example.component.html'
})
export class CVASelectorExampleComponent extends SharedClass implements OnInit {

  cvaSelectorControl!: FormControl;

  constructor(
    private readonly fb: FormBuilder,
    styleSelectorService: StyleSelectorService
  ) {
    super(styleSelectorService);
  }

  ngOnInit(): void {
    this.buildCvaSelectorControl();
  }

  buildCvaSelectorControl(): void {
    this.cvaSelectorControl = this.fb.control({
      value: '',
      disabled: false
    }, Validators.required);
  }

  disableCvaSelector(): void {
    this.cvaSelectorControl.disable();
  }

  enableCvaSelector(): void {
    this.cvaSelectorControl.enable();
  }
}
