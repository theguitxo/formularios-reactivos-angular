import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { IOpcionProvincia } from "src/app/comun/comun.interface";
import { Utils } from "src/app/comun/utils.class";
import * as listaProvincias from '../../../../assets/provincias.json';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario!: FormGroup;
  opcionesProvincias!: IOpcionProvincia[];

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
      idioma: new FormControl('', Validators.required)
    });
  }

}
