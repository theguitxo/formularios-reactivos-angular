import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, Validators } from "@angular/forms";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedClass } from "src/app/shared/shared.class";

@Component({
  selector: 'app-checkbox-required',
  templateUrl: './checkbox-required.component.html',
  styleUrls: ['./checkbox-required.component.scss']
})
export class CheckboxRequiredComponent extends SharedClass implements OnInit {
  checkboxRequired!: FormArray;
  checkboxValues!: { id: string, label: string }[];

  errorMessage!: string;

  constructor(
    private readonly fb: FormBuilder,
    styleSelectorService: StyleSelectorService
  ) {
    super(styleSelectorService);
  }

  ngOnInit(): void {
    this.checkboxValues = [
      {
        id: 'id1',
        label: 'Value 1'
      },
      {
        id: 'id2',
        label: 'Value 2'
      },
      {
        id: 'id3',
        label: 'Value 3'
      }
    ];

    this.checkboxRequired = this.fb.array([], [
      Validators.required,
      Validators.minLength(2)
    ]);
  }

  onCheckboxChange(event: any): void {
    const isChecked = event.target ? event.target.checked : event.checked;
    const checkboxValue = event.target ? event.target.value : event.source.value;

    if (isChecked) {
      this.checkboxRequired.push(new FormControl(checkboxValue));
    } else {
      const index = this.checkboxRequired.controls.findIndex(item => item.value === checkboxValue);
      if (index > -1) {
        this.checkboxRequired.removeAt(index);
      }
    }

    this.errorMessage = `
      Se require un mínimo de ${this.checkboxRequired.errors?.minlength?.requiredLength} valores seleccionados.
      Se ha${this.checkboxRequired.errors?.minlength?.actualLength > 1 ? 'n' : ''} seleccionado ${this.checkboxRequired.errors?.minlength?.actualLength}.
    `;
  }
}
