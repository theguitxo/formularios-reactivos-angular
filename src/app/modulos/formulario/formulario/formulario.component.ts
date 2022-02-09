import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";
import { ILangIcon, IOptionState } from "src/app/comun/shared.interface.";
import { Utils } from "src/app/comun/utils.class";
import { SweetAlertOptions } from "sweetalert2";
import * as listaProvincias from '../../../../assets/provincias.json';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  @ViewChild('confirmationSwal') public readonly confirmationSwal!: SwalComponent;

  formulario!: FormGroup;
  opcionesProvincias!: IOptionState[];
  opcionesPopUp!: SweetAlertOptions;
  idiomaSeleccionado!: ILangIcon;

  constructor(
    private readonly fb: FormBuilder
  ) {}

  get controles() {
    return this.formulario.controls;
  }

  ngOnInit(): void {
    this.opcionesProvincias = Utils.getJSONDefault(listaProvincias);

    this.formulario = this.fb.group({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      provincia: new FormControl('', [Validators.required]),
      idioma: new FormControl('', Validators.required),
      terminosCondiciones: new FormControl(false, Validators.requiredTrue)
    });

    this.opcionesPopUp = {
      confirmButtonColor: '#0d6efd',
      confirmButtonText: 'Aceptar'
    };
  }

  handleReset(): void {
    this.formulario.reset();
  }

  handleEnviar(): void {
    const provincia = this.opcionesProvincias.find(prov => prov.code === this.controles.provincia.value)?.state;
    this.confirmationSwal.title = `${this.controles.nombre.value} (${this.controles.email.value})`;
    this.confirmationSwal.text = `${provincia} - ${this.idiomaSeleccionado.name}`;
    this.confirmationSwal.fire();
  }

  cambiaIdioma(idioma: ILangIcon): void {
    this.idiomaSeleccionado = idioma;
  }
}
