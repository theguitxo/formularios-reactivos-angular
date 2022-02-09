import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { TablaDatosComponent } from "./tabla-datos/tabla-datos.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module
  ],
  declarations: [
    TablaDatosComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TablaDatosComponent,
    SweetAlert2Module
  ]
})
export class SharedModule {}
