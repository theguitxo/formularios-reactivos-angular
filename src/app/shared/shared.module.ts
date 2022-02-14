import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { ControlDataTableComponent } from "./control-data-table/control-data-table.component";
import { StyleSelectorComponent } from "./style-selector/style-selector.component";

/**
 * Módulo compartidos para la aplicación
 */
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module
  ],
  declarations: [
    ControlDataTableComponent,
    StyleSelectorComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module,
    ControlDataTableComponent,
    StyleSelectorComponent
  ]
})
export class SharedModule {}
