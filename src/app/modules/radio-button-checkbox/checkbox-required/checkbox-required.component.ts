import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";

@Component({
  selector: 'app-checkbox-required',
  templateUrl: './checkbox-required.component.html',
  styleUrls: ['./checkbox-required.component.scss']
})
export class CheckboxRequiredComponent implements OnInit {
  isBootstrap!: Observable<boolean>;
  isMaterial!: Observable<boolean>;

  checkboxRequired!: FormArray;
  checkboxValues!: { id: string, label: string }[];

  errorMessage!: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly styleSelectorService: StyleSelectorService
  ) {}

  ngOnInit(): void {
    this.isBootstrap = this.styleSelectorService.isBootstrap;
    this.isMaterial = this.styleSelectorService.isMaterial;

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
      Validators.minLength(3)
    ]);
  }

  onCheckboxChange(event: any): void {
    if (event.target.checked) {
      this.checkboxRequired.push(new FormControl(event.target.value));
    } else {
      const index = this.checkboxRequired.controls.findIndex(item => item.value === event.target.value);
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
