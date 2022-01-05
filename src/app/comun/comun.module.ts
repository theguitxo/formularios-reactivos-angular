import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TablaDatosComponent } from "./tabla-datos/tabla-datos.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    TablaDatosComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    TablaDatosComponent
  ]
})
export class ComunModule {}
