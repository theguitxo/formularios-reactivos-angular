import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/comun/shared.module";
import { FormularioRoutingModule } from "./formulario-routing.module";
import { FormularioComponent } from "./formulario/formulario.component";
import { SelectorIdiomaComponent } from "./selector-idioma/selector-idioma.component";

@NgModule({
  imports: [
    SharedModule,
    FormularioRoutingModule
  ],
  declarations: [
    FormularioComponent,
    SelectorIdiomaComponent
  ]
})
export class FormularioModule {}
