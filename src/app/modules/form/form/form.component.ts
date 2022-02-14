import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";
import { ILangIcon, IOptionState } from "src/app/shared/shared.inteface";
import { Utils } from "src/app/shared/utils.class";
import { SweetAlertOptions } from "sweetalert2";
import * as statesList from '../../../../assets/states.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  @ViewChild('confirmationSwal') public readonly confirmationSwal!: SwalComponent;

  form!: FormGroup;
  stateOptions!: IOptionState[];
  popUpOptions!: SweetAlertOptions;
  selectedLanguage!: ILangIcon;

  constructor(
    private readonly fb: FormBuilder
  ) {}

  get formControls() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.stateOptions = Utils.getJSONDefault(statesList);

    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      state: new FormControl('', [Validators.required]),
      lang: new FormControl('', Validators.required),
      termsConditions: new FormControl(false, Validators.requiredTrue)
    });

    this.popUpOptions = {
      confirmButtonColor: '#0d6efd',
      confirmButtonText: 'Aceptar'
    };
  }

  handleReset(): void {
    this.form.reset();
  }

  handleSend(): void {
    const state = this.stateOptions.find(prov => prov.code === this.formControls.state.value)?.state;
    this.confirmationSwal.title = `${this.formControls.name.value} (${this.formControls.email.value})`;
    this.confirmationSwal.text = `${state} - ${this.selectedLanguage.name}`;
    this.confirmationSwal.fire();
  }

  changeLanguage(lang: ILangIcon): void {
    this.selectedLanguage = lang;
  }
}
