import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SweetAlert2LoaderService, SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { TablaDatosComponent } from "./tabla-datos/tabla-datos.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  declarations: [
    TablaDatosComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    TablaDatosComponent,
    SweetAlert2Module
  ]
})
export class ComunModule {}
